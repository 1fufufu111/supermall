<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon" class="imgStyle"></slot></div>
    <div v-else><slot name="item-icon-active" class="imgStyle"></slot></div>
    <div :style="activeStyle"><slot name="item-text"  class="imgStyle"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
      isActive(){
      return this.$route.path.indexOf(this.path) !== -1
      },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  font-size: 14px;
}
</style>
