<script>
export default {
  name: "ErrorAlert"
}
</script>

<template>
  <dialog open class="alert alert-danger">
    <slot></slot>
  </dialog>
</template>

<style scoped>
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  width: 100px;
}
</style>