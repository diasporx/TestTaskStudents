<template>
  <div class="box__Select" :style="{ 'padding': sort !== '' ? '7px 12px' : '13.5px 12px', 'border': this.menu ? '1px solid #006CFE' : '1px solid #D5E7FF'}" @click="menu = !menu">
    <span :style="{ 'font-size': sort !== '' ? '11px' : '14px', 'top': sort !== '' ? '7px' : '' }">Сортировать по</span>
    <span>{{ InitializeSort(sort) }}</span>
    <ul v-if="menu" class="menuMobile">
        <li @click="$parent.sortTable('name', 'mobile')">ФИО</li>
        <li @click="$parent.sortTable('date', 'mobile')">Дата подачи заявления</li>
        <li @click="$parent.sortTable('subject1', 'mobile')">Балл по русскому</li>
        <li @click="$parent.sortTable('subject2', 'mobile')">Балл по математике</li>
        <li @click="$parent.sortTable('subject3', 'mobile')">Балл по информатике</li>
        <li @click="$parent.sortTable('totalScore', 'mobile')">Суммарный балл</li>
        <li @click="$parent.sortTable('percentage', 'mobile')">Процент</li>
    </ul>
  </div>
</template>
<!--padding: 13.5px 12px;-->
<script>
export default {
  name: 'SelectSortingMobile',
  props: {
    sort: {
      type: String
    }
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    InitializeSort(item){
      switch (item) {
        case 'name':
          return 'ФИО';
        case 'date':
          return 'Дата подачи заявления';
        case 'subject1':
          return 'Балл по русскому';
        case 'subject2':
          return 'Балл по математике';
        case 'subject3':
          return 'Балл по информатике';
        case 'totalScore':
          return 'Суммарный балл';
        case 'percentage':
          return 'Процент';
        default:
          return '';
      }
    }
  }
}
</script>