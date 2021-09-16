<template>
  <nav class="navbar navbar-expand-sm navbar-light fixed-top
  " style="background-color: #fff;">
    <div class="container-md">
      <router-link class="mr-4" to="/">FESTIVAL</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/international/list1">國際級</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nationwide/list2">全國級</router-link>
          </li>
        </ul>
        <input class="mr-sm-2 mt-3 mt-sm-0" type="search" placeholder="請輸入節慶名稱" aria-label="Search" v-model="searchText" @keyup.enter="search(searchText)">
        <a @click.prevent="search(searchText)"><i class="fas fa-search"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      searchText: '',
    }
  },
  methods: {
    search(text) {
      this.$router.push(`/search/${text}`);
      this.searchText = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Karantina&display=swap');
  $color-grey: #C4C4C4;
  $color-light-grey: #F5F5F5;
  $color-orange: #ff6d00;
  nav {
    box-shadow: 0px 2px 1px $color-light-grey;
  }
  .navbar-light .container-md>a {
    font-size: 2.3rem;
    font-family: 'Karantina', cursive;
    color: $color-orange;
    text-decoration: none;
  }
  .nav-link {
    cursor: pointer;
    &:hover {
      color: $color-orange !important;
    }
  }
  input {
    border-radius: 10px;
    outline: none;
    border: none;
    padding-left: 10px;
    background-color: $color-light-grey;
    font-size: 14px;
    line-height: 2;
  }
  .fa-search {
    color: $color-grey;
    cursor: pointer;
    &:hover {
      color: $color-orange;
    }
  }
</style>
