<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="">
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    goodsItem :{
      type:Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>

</style>