<template>
  <div class="container-md searchContent">
    <loading :active.sync="isLoading"></loading>
    <div v-if="isLoading">
      <h5 class="text-center"><i class="fas fa-search mr-2"></i>資料搜尋中</h5>
    </div>
    <div v-else>
      <h5>搜尋：{{searchText}} ，找到 {{result.length}} 筆資料</h5>
      <div v-if="result.length == 0">
        <h5 class="text-center"><i class="fas fa-search mr-2"></i>目前查無相關節慶活動</h5>
      </div>
      <div v-else>
        <festivals></festivals>
      </div>
    </div>
  </div>
</template>

<script>
import festivals from './festivals.vue';
export default {
  name: 'search',
  data () {
    return {
      festival: [],
      searchText: '',
      isLoading: false
    }
  },
  components: {
    festivals
  },
  created() {
    const vm = this;
    const api = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    vm.isLoading = true;
    vm.$http.get(api)
      .then(function(data) {
        vm.festival = data.data;
        vm.isLoading = false;
      });
    if(vm.$route.params.searchText) {
        vm.searchText = vm.$route.params.searchText;
    }
  },
  computed: {
    result() {
      const vm = this;
      return vm.festival.filter(function(item) {
          return item.actName.match(vm.searchText);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container-md.searchContent {
    padding-top: 100px;
  }
  h5 {
      margin: 0 0 2rem 2rem;
  }
  h5.text-center {
    margin: 10rem 0 11rem 0;
    color: #ff6d00;
    i {
      font-weight: bold;
    }
  }
</style>
