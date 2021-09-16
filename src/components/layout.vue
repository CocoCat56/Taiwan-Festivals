<template>
  <div id="layout">
    <navbar></navbar>
    <router-view></router-view>
    <footer>
      <div class="container-md">
        <p>本站僅作品練習，圖資來源為文化部文化資料開放服務網，無任何商業營利用途</p>
        <p>使用之資料集為<a href="https://opendata.culture.tw/frontsite/openData/detail?datasetId=413" target="_blank">文化部[2015-2021][藝文活動-節慶專區]</a></p>
        <p>此開放資料依政府資料開放授權條款 (Open Government Data License) 進行公眾釋出，使用者於遵守本條款各項規定之前提下，得利用之。</p>
        <p>政府資料開放授權條款：<a href="https://data.gov.tw/license" target="_blank">https://data.gov.tw/license</a></p>
        <p>© 2021 All Right Reserved | Design by 
          <a href="https://coco-personal-portfolio.netlify.app/" target="_blank">劉盈秀</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import navbar from '@/components/navbar';

export default {
  name: 'layout',
  components: {
    navbar,
  }
}
</script>

<style lang="scss" scoped>
  $color-light-grey: #F5F5F5;
  $color-orange: #ff6d00;
  $color-black: #535353;
  footer {
    padding: 2rem 0;
    background-color: $color-light-grey;
    font-size: 14px;
    color: $color-black; 
    a {
      color: $color-orange;
      text-decoration: none;
      &:hover {
        font-weight: bolder;
      }
    }
  }
</style>
