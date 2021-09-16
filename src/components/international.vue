<template>
  <div class="wrap">
    <div class="titleText">
      <h2>國際級</h2>
    </div>
    <festivals></festivals>
  </div>
</template>

<script>
import festivals from './festivals.vue';
export default {
  name: 'international',
  data () {
    return {}
  },
  components: {
    festivals
  },
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
    background-color: #F58634;
    padding: 30px;
  }
</style>
