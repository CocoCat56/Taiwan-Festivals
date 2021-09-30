<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div class="banner">
      <div class="bannerImg">
        <img :src="banner.imageUrl" class="d-block w-100" :alt="banner.actName" :title="banner.actName">
      </div>
      <div class="bannerMark"></div>
      <div class="search">
        <h3>臺灣節慶活動</h3>
        <div class="searchInput d-none d-sm-block">
          <input class="mr-sm-2 mt-3 mt-sm-0" type="search" placeholder="請輸入節慶名稱" aria-label="Search" v-model="searchText" @keyup.enter="search(searchText)">
          <a @click.prevent="search(searchText)"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
    <festivals></festivals>
  </div>
</template>

<script>
import festivals from './festivals.vue';
export default {
  name: 'home',
  data () {
    return {
      banner: {},
      searchText: '',
      isLoading: false
    }
  },
  components: {
    festivals
  },
  methods: {
    search(text) {
      this.$router.push(`/search/${text}`);
      this.searchText = '';
    }
  },
  created() {
    const vm = this;
    const api = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    vm.isLoading = true;
    vm.$http.get(api)
      .then(function(data) {
        vm.banner = data.data[0];
        vm.banner.imageUrl = "https://cloud.culture.tw/" + vm.banner.imageUrl;
        vm.isLoading = false;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-grey: #C4C4C4;
  $color-light-grey: #F5F5F5;
  $color-black: #535353;
  $color-white: #fff;
  $color-orange: #ff6d00;
  .wrap {
    padding-top: 70px;
  }
  .banner {
    position: relative;
    margin-bottom: 1.5rem;
  }
  .bannerImg img{
    height: 45vw;
    object-fit: cover;
  }
  .bannerMark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-black, 0.2);
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      color: $color-white;
      margin-bottom: 2vw;
    }
  }
  .searchInput{
    background-color: $color-white;
    padding: 5px;
    padding-left: 10px;
    border-radius: 5px;
    input {
      width: 30vw;
      outline: none;
      border: none;
    }
    a {
      display: inline-block;
      background-color: $color-white;
      color: $color-grey;
      cursor: pointer;
      padding: 5px 10px;
      &:hover {
        color: $color-orange;
      }
    }
  }
</style>
