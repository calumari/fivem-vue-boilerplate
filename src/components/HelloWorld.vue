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
  mounted(){
    console.log('Hello World')
  }
};
</script>

<style scoped></style>
