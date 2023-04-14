<template>
  <div class="logo">
    <!--Blocks-->
    <div class="blocks">
      <div class="row">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="row">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="row">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <!--Blocks-->
    <!--    Text-->
    <div class="text">
      <h3>Система таблиц</h3>
    </div>
    <!--    Text-->
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 130px;

  .blocks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;

    .row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      .item {
        width: 15px;
        height: 9px;
        border: 3px solid $blue;
      }
    }
  }
  .text {
    h3 {
      color: $blue;
      text-transform: uppercase;
    }
  }
}
</style>