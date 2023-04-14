<template>
  <table>
    <thead>
    <tr>
      <th width="19%">ФИО</th>
      <th>Дата Подачи заявления</th>
      <th>Балл по русскому</th>
      <th>Балл по математике</th>
      <th>Балл по информатике</th>
      <th>Суммарный балл</th>
      <th>Процент</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id" :id="`row_id_${item.id}`">
      <td>{{ item.name }}</td>
      <td>{{ item.date }}</td>
      <td :class="`bold `+ getClass('score', scoreItem.score)" v-for="scoreItem in item.subjects">
        {{ scoreItem.score }}
      </td>
      <td :class="`bold `+ getClass('summ', calculateTotalScore(item.subjects) )">{{
          calculateTotalScore(item.subjects)
        }}
      </td>
      <td :class="`bold `+ getClass('summ', calculateTotalScore(item.subjects) )">
          <div class="circle-group">
            {{ getProcent(calculateTotalScore(item.subjects)) }}
            <div class="circle"></div>
          </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'Table',
  computed: {
    data() {
      return this.$store.getters.getDataArray;
    }
  },
  methods: {
    getClass(name, score) {
      if (name === 'score') {
        if (score >= 4 && score <= 5) {
          return 'high';
        } else if (score >= 3 && score < 4) {
          return 'medium';
        } else if (score >= 1 && score < 3) {
          return 'low';
        }
      } else if (name === 'summ') {
        let percent = this.getProcent(score)
        if (percent <= 25) {
          return 'low';
        } else if (percent > 25 && percent <= 50) {
          return 'low';
        } else if (percent > 50 && percent <= 75) {
          return 'medium';
        } else if (percent > 75 && percent <= 100) {
          return 'high';
        }
      }
    },
    getProcent(score) {
      let percent = (score / 15) * 100;

      return Math.floor(percent);
    },
    calculateTotalScore(array) {
      let totalScore = 0;
      for (let i = 0; i < array.length; i++) {
        totalScore += parseFloat(array[i].score);
      }
      return totalScore;
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

table {
  width: 100%;
  font-family: 'Proxima Nova', sans-serif;

  tr th {
    text-align: left;
    color: $blue;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }

  tr td {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  tr td:last-child, tr th:last-child {text-align: center}

  tr th, tr td {
    padding: 23.5px 20px;
  }

  td.bold {
    font-weight: 700
  }

  td.high {
    color: $green
  }

  td.medium {
    color: $orange
  }

  td.low {
    color: $red
  }
  .circle-group {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .circle {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
