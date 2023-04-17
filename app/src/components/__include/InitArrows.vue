<template>
  <svg
      width="7"
      height="9"
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="sortDir === 1 ? 'M3.5 0.5L7 4.5L-1.74846e-07 4.5L3.5 0.5Z' : 'M3.5 8.5L7 4.5L4.76995e-08 4.5L3.5 8.5Z'" :fill="arrowColor"/>
    <path :d="sortDir === 1 ? 'M3.5 8.5L3.5 4.5' : 'M3.5 0.5L3.5 4.5'" :stroke="arrowColor" stroke-width="2"/>
  </svg>
</template>
<script>
export default {
  name: 'initArrows',
  props: {
    sortDir: {
      type: Number,
      required: true,
    },
    arrowColor: {

    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/colors.scss';
svg {
  margin-left: 2px;
  display: flex;
}
</style>