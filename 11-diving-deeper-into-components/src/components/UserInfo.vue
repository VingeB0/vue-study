<template>
  <BaseSection>
<!--    <template v-slot:header>-->
    <template #header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
    </template>
<!--    <template v-slot:default>-->
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from './../components/BaseSection.vue'
import BaseBadge from './../components/BaseBadge.vue'
export default {
  components: {
    BaseSection,
    BaseBadge,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

</style>