<template>
  <header>

    <logo/>

    <account />

  </header>
</template>
<script>
import logo from './Header/logo'
import account from './Header/account'
export default {
  name: 'Header',
  components: {logo, account}
}
</script>