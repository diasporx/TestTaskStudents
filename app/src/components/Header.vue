<template>
  <header>

    <logo/>

    <div class="account">

    </div>
  </header>
</template>
<script>
import logo from './__include/logo'
export default {
  name: 'Header',
  components: {logo}
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