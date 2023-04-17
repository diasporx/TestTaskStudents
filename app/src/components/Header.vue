<template>
  <header>

    <logo/>

    <account />

  </header>
</template>
<script>
import logo from './UI/Header/logo'
import account from './UI/Header/account'
export default {
  name: 'Header',
  components: {logo, account}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
header {
  background-color: $white;
  padding: 20px 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>