<template>
  <div id="home">
    <nav-bar class="homeNav"><template v-slot:center>购物街</template></nav-bar>
    <swiper :banners="banners"></swiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <FeatureView></FeatureView>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "../../network/home";
import Swiper from "@/components/common/swiper/Swiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";
export default {
  name: "home",
  data(){
    return {
      banners:[''],
      recommends:[''],
    }
  },
  components:{
    NavBar,
    Swiper,
    HomeRecommendView,
    FeatureView
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;

    })
  }
}
</script>

<style scoped>
  .homeNav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 9;
  }

</style>