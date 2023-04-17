<script>
export default {
  mounted() {
    const sortKey = localStorage.getItem('sortKey');
    const sortDirection = localStorage.getItem('sortDirection');
    if (sortKey && sortDirection) {
      this.sortKey = sortKey;
      this.sortDirection = Number(sortDirection);
    }
  },
  computed: {
    sortedStudents() {
      const searchInput = this.SearchInp.toLowerCase();
      return this.students
          .filter(student => student.name.toLowerCase().includes(searchInput))
          .sort((a, b) => {
            if (!this.sortKey) {
              return 0;
            }
            const valA = this.getValueBySortKey(a);
            const valB = this.getValueBySortKey(b);
            const compare = valA === valB ? 0 : (valA < valB ? -1 : 1);
            if (this.sortKey === 'percentage') {
              return this.sortDirection * (compare === 0 ? compare : parseFloat(valA) - parseFloat(valB));
            }
            return this.sortDirection * compare;
          });
    }
  },
  methods: {
    // circleDynamicPercentage
    updateDonutChildren(percent) {
      let offset;
      let backgroundColor;
      if (percent < 50) {
        offset = 180 - (360 / 100) * percent;
        backgroundColor = '#D5E7FF';
      } else if (percent >= 50 && percent <= 75) {
        offset = (360 / 100) * percent - 180;
        backgroundColor = '#FFA200';
      } else if (percent >= 75 && percent <= 100) {
        offset = (360 / 100) * percent - 180;
        backgroundColor = '#01AA88';
      }
      return `transform: rotate(${offset}deg); background-color: ${backgroundColor}`;
    },
    updateDonutParent(percent) {
      let offset;
      if (percent < 50) {
        offset = (360 / 100) * percent;
      } else if (percent > 50) {
        offset = 180;
      }
      return `transform: rotate(${offset}deg)`;
    },
    // circleDynamicPercentage

    // GetClass colors
    getClass(name, score) {
      let result;
      if (name === 'score') {
        if (score >= 4 && score <= 5) {
          result = 'high';
        } else if (score >= 3 && score < 4) {
          result = 'medium';
        } else if (score >= 1 && score < 3) {
          result = 'low';
        }
      } else if (name === 'percent') {
        let percent = score
        if (percent <= 25) {
          result = 'low';
        } else if (percent <= 50) {
          result = 'low';
        } else if (percent <= 75) {
          result = 'medium';
        } else if (percent <= 100) {
          result = 'high';
        }
      }
      return result;
    },
    // GetClass colors

    // sortable
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortDirection *= -1;
      } else {
        this.sortKey = key;
        this.sortDirection = 1;
      }
      localStorage.setItem('sortKey', this.sortKey);
      localStorage.setItem('sortDirection', this.sortDirection);
    },
    // sortable

    // switchCases (computed)
    getValueBySortKey(student) {
      switch (this.sortKey) {
        case 'name':
          return student.name;
        case 'date':
          return student.date;
        case 'subject1':
          return this.getSubjectScore(student, 'Русский язык');
        case 'subject2':
          return this.getSubjectScore(student, 'Математика');
        case 'subject3':
          return this.getSubjectScore(student, 'Информатика');
        case 'totalScore':
          return this.calculateTotalScore(student);
        case 'percentage':
          return this.calculatePercentage(student);
        default:
          return '';
      }
    },
    // switchCases (computed)

    // Score
    getSubjectScore(student, subject) {
      let subjectScore = student.subjects.find(score => score.subject === subject);
      if (subjectScore) {
        return parseFloat(subjectScore.score).toFixed(1);
      }
    },
    // Score

    // ScoreSum
    calculateTotalScore(student) {
      let totalScore = 0;
      student.subjects.forEach(score => {
        totalScore += parseFloat(score.score);
      });
      return totalScore.toFixed(1);
    },
    // ScoreSum

    // Percentage
    calculatePercentage(student) {
      const totalScore = this.calculateTotalScore(student);
      const percentage = (totalScore / (3 * 5)) * 100;
      return percentage.toFixed(0);
    }
    // Percentage
  },
  watch: {
    SearchInp: {
      handler(newValue) {
        localStorage.setItem('SearchInput', this.SearchInp);
        this.SearchInp = newValue
      }
    }
  }
}
</script>