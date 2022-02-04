<template>
  <div id="home">
    <nav-bar class="homeNav"><template v-slot:center>购物街</template></nav-bar>
    <swiper :banners="banners"></swiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <FeatureView></FeatureView>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <GoodsList :goods="goods['pop'].list"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";

import {getHomeMultidata,getHomeGoods} from "../../network/home";


import Swiper from "@/components/common/swiper/Swiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";
import GoodsList from "../../components/content/goods/GoodsList";

export default {
  name: "home",
  data(){
    return {
      banners:[''],
      recommends:[''],
      goods:{
        'pop':{page:0,list:['']},
        'news':{page:0,list:['']},
        'sell':{page:0,list:['']},
      }
    }
  },
  components:{
    NavBar,
    Swiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('news')
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      })
    }
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
.tab-control{
  position: sticky;
  top: 44px;
}
</style>