<template>
  <div class="goods-list">
    <good-list-item v-for="item in goods" :key="item"/>
<!--    {{goods}}-->
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodsList",
  components:{
    GoodListItem
  },
  props:{
    goods:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>