<template>
  <div id="app">
    <Header/>
    <Table/>
  </div>
</template>

<script>
import Table from './components/Table'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Table, Header
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/font/proximanova_regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/font/proximanova_light.otf');
  font-weight: 300;
}
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/font/proximanova_bold.otf');
  font-weight: 700;
}
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/font/proximanova_extrabold.otf');
  font-weight: 800;
}
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/font/proximanova_black.ttf');
  font-weight: 900;
}
body {
  font-family: 'Proxima Nova', sans-serif;
  background-color: $blue-super-light;
}
.container {
  padding: 0 60px;
}
h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
}
h3 {
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
}
.text-big {
  font-weight: 400;
  font-size: 16px;
}
.text-normal {
  font-weight: 400;
  font-size: 14px;
}
.text-normal-bold {
  font-weight: 700;
  font-size: 14px;
}
.caption-bold {
  font-weight: 700;
  font-size: 12px;
}
.caption-mini {
  font-weight: 400;
  font-size: 11px;
}
.text-left {text-align: left}
.text-right {text-align: right}
.mb-20 {
  margin-bottom: 20px;
}
</style>
