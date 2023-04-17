<template>
  <div class="container">

    <h1 class="mb-20">Список заявлений</h1>

    <!--    Search-->
    <div class="search-box">
      <img class="iconSearch" :src="require('@/assets/icons/search.svg')" alt="search">
      <input type="text" v-model="SearchInp" class="search" placeholder="Поиск">
    </div>
    <!--    Search-->

    <!--    table-->
    <table>
      <thead>
      <tr>
        <th
            @click="sortTable('name')"
            @mouseover="changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>ФИО</span>
            <init-arrows v-if="sortKey === 'name'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('date')"
            @mouseover="changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Дата подачи заявления</span>
            <init-arrows v-if="sortKey === 'date'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('subject1')"
            @mouseover="changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Балл по русскому</span>
            <init-arrows v-if="sortKey === 'subject1'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('subject2')"
            @mouseover=" changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Балл по математике</span>
            <init-arrows v-if="sortKey === 'subject2'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('subject3')"
            @mouseover=" changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Балл по информатике</span>
            <init-arrows v-if="sortKey === 'subject3'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('totalScore')"
            @mouseover=" changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Суммарный балл</span>
            <init-arrows v-if="sortKey === 'totalScore'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
        <th
            @click="sortTable('totalScore')"
            @mouseover=" changeColor(true)"
            @mouseout="changeColor(false)"
        >
          <div class="group__arrow">
            <span>Процент</span>
            <init-arrows v-if="sortKey === 'totalScore'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in filteredStudents" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.date }}</td>
        <td :class="`bold `+ getClass('score', getSubjectScore(student, 'Русский язык'))">
          {{ getSubjectScore(student, 'Русский язык') }}
        </td>
        <td :class="`bold `+ getClass('score', getSubjectScore(student, 'Математика'))">
          {{ getSubjectScore(student, 'Математика') }}
        </td>
        <td :class="`bold `+ getClass('score', getSubjectScore(student, 'Информатика'))">
          {{ getSubjectScore(student, 'Информатика') }}
        </td>
        <td :class="`bold `+ getClass('percent', calculatePercentage(student))">{{ calculateTotalScore(student) }}</td>
        <td :class="`bold `+ getClass('percent', calculatePercentage(student) )">
          <div class="circle-group">
            <span>{{ calculatePercentage(student) }}%</span>
            <div id="section1" class="clip">
              <div class="item"></div>
            </div>
            <div id="section2" class="clip">
              <div class="item"></div>
            </div>
            <div id="section3" class="clip"
                 :style="updateDonutParent(calculatePercentage(student))">
              <div class="item"
                   :style="updateDonutChildren(calculatePercentage(student))"></div>
            </div>

          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <!--    table-->

  </div>
</template>

<script>
import TableFunc from "@/components/__include/functions/TableFunc";
import InitArrows from "@/components/__include/InitArrows";

export default {
  name: 'Table',
  components: {InitArrows},
  mixins: [TableFunc],
  data() {
    return {
      SearchInp: localStorage.getItem('SearchInput'),
      students: require('../data/file.json'),
      sortKey: '',
      hoverColor: '#006CFE',
      sortDirection: 1
    }
  },
  methods: {
    // changeColorArrows
    changeColor(bool) {
      if (bool) {
        this.hoverColor = '#004199';
      } else {
        this.hoverColor = '#006CFE';
      }
    },
    // changeColorArrows
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/main.scss';
</style>
