<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherprop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['vue2', 'vue3']
    }
  }
}
</script>

<style scoped>

</style>