<template>
  <div class="icon-search">
    <div class="line"></div>
    <div class="ellipse"></div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/colors.scss';
.icon-search {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  position: relative;
  width: 20px;
  height: 21px;
  .line {
    position: absolute;
    left: 76.96%;
    right: -9.54%;
    top: 78.47%;
    bottom: 21.53%;
    border: 1px solid $blue;
    transform: rotate(45deg);
  }
  .ellipse {
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    left: 0%;
    right: 2.05%;
    top: 0%;
    bottom: 8.45%;
    border: 1px solid $blue;
  }
}
</style>