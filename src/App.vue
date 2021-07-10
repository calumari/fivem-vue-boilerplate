<template>
  <div id="app">
    <hello-world name="2277" />
  </div>
</template>

<script>
//Nui helper component
//import Nui from './utils/Nui';

import HelloWorld from './components/HelloWorld';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  destroyed() {
    window.removeEventListener('message', this.listener);
  },
  mounted() {
    this.listener = window.addEventListener(
      'message',
      event => {
        const item = event.data || event.detail;
        if (this[item.type]) {
          this[item.type](item);
        }
      },
      false,
    );
  },
  methods: {},
};
</script>

<style lang="scss">
/* Want nice animations? Check out https://github.com/asika32764/vue2-animate */
/* @import 'https://unpkg.com/vue2-animate/dist/vue2-animate.min.css'; */
</style>
