<template>
  <div class="block">
    <el-carousel trigger="click" height="200px" :interval="4000">
      <el-carousel-item v-for="(item,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name:'Swiper',
  props:{
    banners:Array
  }
}
</script>

<style scoped>
el-carousel {
  width: 100%;
  height:0
}
img {
  width: 100%;
  height: 100%;
}
.el-carousel__item a{
  margin:0;
}
</style>
