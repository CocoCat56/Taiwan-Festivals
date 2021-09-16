<template>
  <div class="container-md">
    <h4>全國級</h4>
    <festivals></festivals>
  </div>
</template>

<script>
import festivals from './festivals.vue';
export default {
  name: 'nationwide',
  data () {
    return {}
  },
  components: {
    festivals
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-md {
    padding-top: 100px;
  }
  h4 {
    margin-left: 2rem;
  }
</style>
