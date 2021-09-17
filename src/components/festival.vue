<template>
  <div class="container-md">
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-6">
          <img class="img-fluid" :src="newFestival.imageUrl" :alt="newFestival.actName" :title="newFestival.actName">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <div class="d-flex mb-2">
              <h3 class="mr-3">{{ newFestival.actName }}</h3>
              <h6 :class="{'green': newFestival.levelName === '全國級', 'orange': newFestival.levelName === '國際級'}">{{ newFestival.levelName }}</h6>
            </div>
            <p v-if="newFestival.cycle == ''">活動時間：{{ newFestival.startTime.substring(0, 12) }} ~ {{ newFestival.endTime.substring(0, 12) }}</p>
            <p v-if="newFestival.cycle">活動時間：{{ newFestival.cycle }}</p>
            <p>活動地址：{{ newFestival.address }}</p>
            <p class="mb-5">主辦單位：{{ newFestival.org }}</p>
            <a :href="newFestival.website" target="_blank" v-if="newFestival.website">前往活動網站</a>
          </div>
        </div>
      </div>
    </div>
    <div class="content mb-5">
      {{ newFestival.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      id: this.$route.params.id,
      festivals: [],
      newFestival: {}
    }
  },
  created() {
    const vm = this;
    const api = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    vm.$http.get(api)
      .then(function(data) {
        vm.festivals = data.data;
        vm.festivals.forEach(function (item){
          if(item.actId == vm.id) {
            item.imageUrl = "https://cloud.culture.tw" + item.imageUrl;
            vm.newFestival = item;
          }
        });
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-orange: #ff6d00;
  $color-orange1: #F58634;
  $color-green: #01937C;
  $color-white: #fff;
  .container-md {
    padding-top: 100px;
  }
  .card {
    border: none;
    padding: 2rem 0 3rem 0;
    .green, .orange {
      display: inline-block;
      padding: 5px 10px;
      line-height: 1.5;
      color: $color-white;
    }
    .green {
      background-color: $color-green;
    }
    .orange {
      background-color: $color-orange1;
    }
    img {
      border-radius: 5px;
    }
    .card-body>a {
      color: $color-white;
      background-color: $color-orange;
      padding: 5px 10px;
      border-radius: 5px;
      text-decoration: none;
      border: 2px solid $color-orange;
      &:hover {
        color: $color-orange;
        background-color: $color-white;
        font-weight: bold;
      }
    }
  }
  .content {
    line-height: 2;
  }
</style>
