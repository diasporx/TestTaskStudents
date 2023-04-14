<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Main, Header
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
.mb-20 {
  margin-bottom: 20px;
}
</style>
