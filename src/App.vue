<template>
  <router-view />
  <div id="nav">
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar";
  export default {
    components:{
      mainTabBar,
    }
  }
</script>

<style scoped>
@import "assets/css/base.css";

</style>
