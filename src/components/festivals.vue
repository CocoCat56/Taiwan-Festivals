<template>
  <div class="container-md">
    <div class="row">
      <div class="col-lg-4 col-sm-6 col-12 my-4" v-for="(item, key) in newFestivals" :key="key">
        <div class="card">
          <div class="cardImg" @click.prevent="festivalDetail(item.actId)">
            <img :src="`https://cloud.culture.tw${item.imageUrl}`" class="card-img-top" :alt="item.actName" :title="item.actName">
          </div>
          <div class="card-body">
            <h5 class="card-title text-center"><a @click.prevent="festivalDetail(item.actId)">{{ item.actName.substring(0, 13) }}</a></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'festivals',
  data () {
    return {
      festivals: [],
      searchText: '',
      international: '國際級',
      nationwide: '全國級'
    }
  },
  methods: {
      festivalDetail(id) {
        this.$router.push(`/festival/${id}`);
      }
  },
  created() {
    const vm = this;
    const api = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    
    vm.$http.get(api)
      .then(function(data) {
        vm.festivals = data.data;
      });

    if(vm.$route.params.searchText) {
        vm.searchText = vm.$route.params.searchText;
    }
  },
  computed: {
    newFestivals: function() {
        const vm = this;
        if(vm.$route.params.searchText){
            return vm.festivals.filter(function(item) {
                return item.actName.match(vm.searchText);
            });
        } else if(vm.$route.params.list1){
            return vm.festivals.filter(function(item) {
                return item.levelName.match(vm.international);
            });
        } else if(vm.$route.params.list2){
            return vm.festivals.filter(function(item) {
                return item.levelName.match(vm.nationwide);
            });
        } else {
            return vm.festivals;
            // return vm.festivals.splice(0, 10);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-orange: #ff6d00;
  .container-md {
    padding: 2rem 0;
  }
  .card {
    border: none;
    width: 85%;
    margin: 0 auto;
    transition: transform 1s ease-in;
    .cardImg {
      overflow: hidden;
      cursor: pointer;
    }
    img {
      height: 12rem;
      object-fit: cover;
    }
    h5 {
      font-size: 18px;
      cursor: pointer;
    }
    &:hover {
      img {
        transform: scale(1.5);
      }
      a {
        color: $color-orange;
      }
    }
  }
</style>
