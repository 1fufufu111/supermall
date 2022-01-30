<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="" >
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "../common/tabbar/TabBar";
import tabBarItem from "../common/tabbar/TabBarItem";

export default {
  name: "mainTabBar",
  components:{
    tabBar,
    tabBarItem,
  }
}
</script>

<style scoped>
.tab-bar-item img {
  width:24px;
  height:24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color:red;
}
</style>
