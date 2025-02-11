<script>
import ErrorAlert from './../components/ErrorAlert.vue'
export default {
  name: "ManageGoals",
  components: {
    ErrorAlert
  },
  methods: {
    addGoal() {
      console.log('addGoal');
      const value = this.$refs.goal.value;
    }
  }
}
</script>

<template>
  <h2>Manage Goals</h2>
  <input ref="goal" type="text">
  <button @click="addGoal">set goal</button>
  <teleport to="body">
    <ErrorAlert>
      <h1>alert</h1>
      <button>close</button>
    </ErrorAlert>
  </teleport>
</template>

<style scoped>

</style>