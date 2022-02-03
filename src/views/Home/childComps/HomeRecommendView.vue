<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return null
      }
    }
  }
};
</script>

<style scoped>
  .recommend {
    display: flex;
    width:100%;
    text-align:center;
    font-size: 12px;
    padding:15px 0 30px ;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex:1;

  }
  .recommend-item img {
    margin: 5px;
    width:80%;
  }
</style>