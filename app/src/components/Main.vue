<template>
  <div class="container">

    <h1 class="mb-20">Список заявлений</h1>

    <!--    Search-->
    <div class="search-box">
      <div class="layout">
        <iconSearch class="iconSearch"/>
        <input type="text" class="search" placeholder="Поиск">
      </div>
    </div>
    <!--    Search-->

    <!--    table-->
    <Table/>
    <!--    table-->

  </div>
</template>

<script>
import iconSearch from '@/components/__include/icons/search'

import Table from '@/components/Table'

export default {
  name: 'Main',
  components: {iconSearch, Table},
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';
.container {
  padding-top: 48px;
  padding-bottom: 40px;
}

.search-box {
  display: flex;
  background-color: $white;
  border: 1px solid $blue-super-light;
  border-radius: 4px;
  .layout {
    margin: 16.5px 16px;
    display: flex;

    .iconSearch {
      margin-right: 8px;
    }

    input.search {
      width: 100%;
      font-family: 'Proxima Nova', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      box-shadow: none;
      outline: none;
      border: none;
    }
  }
}
</style>
