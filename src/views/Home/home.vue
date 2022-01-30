<template>
  <div id="home">
    <nav-bar class="homeNav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "home",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .homeNav{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>