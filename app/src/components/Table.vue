<template>
  <div class="container">

    <h1 class="mb-20">Список заявлений</h1>

    <!--    Search-->
    <div class="search-box">
      <img class="iconSearch" :src="require('@/assets/icons/search.svg')" alt="search">
      <input type="text" v-model="SearchInp" class="search" placeholder="Поиск">
    </div>
    <!--    Search-->

<!--    mobileSorting-->
    <div class="box__mobileSorting">
      <selectSort :sort="sortKey" :direction="sortDirection" />
      <div class="btns_Group-mobile">
        <button @click="sortDirection = -1" :style="{'background-color': sortDirection === -1 ? '#006CFE' : 'transparent'}"><init-arrows :sortDir="-1" :arrowColor="sortDirection === -1 ? '#FFF' : '#006CFE'" /></button>
        <button @click="sortDirection = 1" :style="{'background-color': sortDirection === 1 ? '#006CFE' : 'transparent'}"><init-arrows :sortDir="1" :arrowColor="sortDirection === 1 ? '#FFF' : '#006CFE'" /></button>
      </div>
    </div>
<!--    mobileSorting-->

    <!--    table-->
    <div class="table-container">
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
              @click="sortTable('percentage')"
              @mouseover=" changeColor(true)"
              @mouseout="changeColor(false)"
          >
            <div class="group__arrow">
              <span>Процент</span>
              <init-arrows v-if="sortKey === 'percentage'" :arrowColor="hoverColor" :sortDir="sortDirection"/>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="student in sortedStudents" :key="student.id">
          <td data-label="ФИО">{{ student.name }}</td>
          <td data-label="Дата подачи заявления">{{ student.date }}</td>
          <td data-label="Балл по русскому">
            <span :class="`bold `+ getClass('score', getSubjectScore(student, 'Русский язык'))">{{
                getSubjectScore(student, 'Русский язык')
              }}</span>
          </td>
          <td data-label="Балл по математике">
            <span :class="`bold `+ getClass('score', getSubjectScore(student, 'Математика'))">{{
                getSubjectScore(student, 'Математика')
              }}</span>
          </td>
          <td data-label="Балл по информатике">
            <span :class="`bold `+ getClass('score', getSubjectScore(student, 'Информатика'))">{{
                getSubjectScore(student, 'Информатика')
              }}</span>
          </td>
          <td data-label="Суммарный балл">
            <span :class="`bold `+ getClass('percent', calculatePercentage(student))">{{
                calculateTotalScore(student).toFixed(1)
              }}</span>
          </td>
          <td data-label="Процент">
            <div :class="getClass('percent', calculatePercentage(student) )">
              <div class="circle-group">
                <span>{{ calculatePercentage(student) }}%</span>
                <div class="progress-bar__line">
                  <div class="progress-bar__fill" :style="{ width: calculatePercentage(student) + '%' }"></div>
                </div>
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
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--    table-->

  </div>
</template>

<script>
import TableFunc from "@/components/__include/functions/TableFunc";
import selectSort from '@/components/__include/selectSortMobile';
import InitArrows from "@/components/__include/InitArrows";

export default {
  name: 'Table',
  components: {InitArrows, selectSort},
  mixins: [TableFunc],
  data() {
    return {
      SearchInp: localStorage.getItem('SearchInput') ? localStorage.getItem('SearchInput') : '',
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
