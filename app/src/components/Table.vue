<template>
  <table>
    <thead>
    <tr>
      <th width="415px" @click="$parent.handleSort('name')">ФИО</th>
      <th @click="$parent.handleSort('date')">Дата Подачи заявления</th>
      <th @click="$parent.handleSort('Русский язык')">Балл по русскому</th>
      <th @click="$parent.handleSort('Математика')">Балл по математике</th>
      <th @click="$parent.handleSort('Информатика')">Балл по информатике</th>
      <th @click="$store.commit('sortDataByTotalScore', { data: data, getters: $store.getters })">Суммарный балл</th>
      <th @click="$store.commit('sortDataByPercentage', { data: data, getters: $store.getters })">Процент</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item.id" :id="`row_id_${item.id}`">
      <td>{{ item.name }}</td>
      <td>{{ item.date }}</td>
      <td :class="`bold `+ getClass('score', scoreItem.score)" v-for="scoreItem in item.subjects">
        {{ scoreItem.score }}
      </td>
      <td :class="`bold `+ getClass('summ', $store.getters.calculateTotalScore(item.subjects) )">{{
          $store.getters.calculateTotalScore(item.subjects)
        }}
      </td>
      <td :class="`bold `+ getClass('summ', $store.getters.calculateTotalScore(item.subjects) )">
        <div class="circle-group">
          <span>{{ getProcent($store.getters.calculateTotalScore(item.subjects)) }}%</span>
          <div id="section1" class="clip">
            <div class="item"></div>
          </div>
          <div id="section2" class="clip">
            <div class="item"></div>
          </div>
          <div id="section3" class="clip" :style="updateDonutParent(getProcent($store.getters.getProcent($store.getters.calculateTotalScore(item.subjects))))">
            <div class="item" :style="updateDonutChildren(getProcent($store.getters.getProcent($store.getters.calculateTotalScore(item.subjects))))"></div>
          </div>

        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import initTable from '@/components/__include/functions/initTable'
export default {
  name: 'Table',
  mixins: [initTable],
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style_table.scss';
</style>
