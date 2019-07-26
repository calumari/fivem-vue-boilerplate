<template>
  <div>
    <p>Hello {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
