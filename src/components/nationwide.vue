<template>
  <div class="wrap">
    <div class="titleText">
      <h2>全國級</h2>
    </div>
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
  .wrap {
    padding-top: 70px;
  }
  .titleText {
    margin-bottom: 2rem;
    text-align: center;
  }
  h2 {
    color: #fff;
    background-color: #01937C;
    padding: 30px;
  }
</style>
