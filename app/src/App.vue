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
@import '@/assets/scss/main.scss';
@import '@/assets/scss/media.scss';
</style>
