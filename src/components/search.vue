<template>
  <div class="container-md searchContent">
    <h4>Search：{{searchText}}</h4>
    <festivals></festivals>
  </div>
</template>

<script>
import festivals from './festivals.vue';
export default {
  name: 'search',
  data () {
    return {
      searchText: ''
    }
  },
  components: {
    festivals
  },
  created() {
    const vm = this;
    if(vm.$route.params.searchText) {
        vm.searchText = vm.$route.params.searchText;
        console.log(vm.searchText);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-md.searchContent {
    padding-top: 100px;
  }
  h4 {
      margin: 0 0 2rem 2rem;
  }
</style>
