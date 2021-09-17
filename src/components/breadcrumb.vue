<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/"><i class="fas fa-home"></i></router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/international/list1" v-if="newFestival.levelName === '國際級'">國際級</router-link>
                <router-link to="/nationwide/list2" v-if="newFestival.levelName === '全國級'">全國級</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ newFestival.actName }}</li>
        </ol>
    </nav>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
        festivals: [],
        newFestival: {},
        id: this.$route.params.id
    }
  },
  created() {
    const vm = this;
    const api = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    vm.$http.get(api)
      .then(function(data) {
        vm.festivals = data.data;
        vm.festivals.forEach(function(item) {
            if(item.actId == vm.id) {
                vm.newFestival = item;
            }
        });
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-black: #535353;
  $color-orange: #ff6d00;
  .breadcrumb {
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
  .breadcrumb-item a {
    color: $color-black !important;
    text-decoration: none;
    &:hover {
        color: $color-orange !important;
    }
  }

</style>
