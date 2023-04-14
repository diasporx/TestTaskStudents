<template>
  <table>
    <thead>
    <tr>
      <th width="415px">ФИО</th>
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
          <span>{{ getProcent(calculateTotalScore(item.subjects)) }}</span>
          <div :class="`circle`"
               :style="dynamicBorder(getProcent(calculateTotalScore(item.subjects)))"
          ></div>
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
      let result;
      if (name === 'score') {
        if (score >= 4 && score <= 5) result = 'high';
        else if (score >= 3 && score < 4) result = 'medium';
        else if (score >= 1 && score < 3) result = 'low';
      } else if (name === 'summ') {
        let percent = this.getProcent(score);
        if (percent <= 25) result = 'low';
        else if (percent <= 50) result = 'low';
        else if (percent <= 75) result = 'medium';
        else if (percent <= 100) result = 'high';
      }
      return result;
    },

    dynamicBorder(percent){
      let duoOne
      if (percent >= 0 && percent <= 50) {
        duoOne = (90 * percent)/50
        return `background-image: linear-gradient(${duoOne}deg, #ddd 50%, transparent 50%),  linear-gradient(90deg, #ddd 50%, steelblue 50%);`
      } else {
          duoOne = (90 * percent)/50
          return `background-image: linear-gradient(90deg, #ddd 50%, transparent 50%),  linear-gradient(90deg, #ddd 50%, steelblue 50%);`
      }
    },
    getBorderColor(score) {
      let borderColor;
      let percent = (score / 15) * 100;
      let rg = Math.floor(percent);
      if (rg >= 0 && rg <= 25) {
        borderColor = 'red';
      } else if (rg > 25 && rg <= 50) {
        borderColor = 'red';
      } else if (rg > 50 && rg <= 75) {
        borderColor = 'yellow';
      } else if (rg > 75 && rg <= 100) {
        borderColor = 'green';
      }
      return borderColor;
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

  tbody tr {
    border-radius: 4px;
    background-color: $white;
    margin-bottom: 4px;

    td {
      border-right: 1px solid $blue-super-light;
    }

    td:last-child {
      border-right: 0
    }
  }

  tr td {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  tr td:last-child, tr th:last-child {
    text-align: center
  }

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

    span {
      position: relative;
      z-index: 2;
      background-color: $white;
      border-radius: 50%;
      padding: 10px;
    }

    .circle {
      position: absolute;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .circle::after {
      border-radius: 50%;
      display: block;
      content: "";
      background: transparent;
      position: absolute;
      height: 40px;
      width: 40px;
    }

    //.circle.red {
    //  background-image: linear-gradient(-30deg, #ddd 50%, transparent 50%),
    //  linear-gradient(90deg, #ddd 50%, steelblue 50%);
    //}
  }
}
</style>
