<template>
  <div class="account">
    <div class="text">
      <span class="name text-normal-bold">Светлана</span>
      <span class="manager text-normal">Сотрудник</span>
    </div>
    <img :src="require('@/assets/images/account.png')" alt="account">
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/colors.scss';
.account {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 121px;
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    span.name {
      color: $blue;
    }
    span.manager {
      color: $medium;
    }
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>