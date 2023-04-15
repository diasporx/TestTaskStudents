<script>
export default {
  methods: {
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
      } else if (name === 'summ') {
        let percent = this.getProcent(score);
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
    getProcent(score) {
      let percent = (score / 15) * 100;
      return Math.floor(percent);
    },
  },
}
</script>