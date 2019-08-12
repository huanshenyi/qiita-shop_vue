<template>
  <div>
    <router-link to="/goods" tag="div">
      <div class="header-abs">
        back
      </div>
    </router-link>
    <div class="header-fixed"></div>

  </div>
</template>

<script>
    export default {
        name: "FoodsHeader"
    }
</script>

<style scoped lang="stylus">
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0,0,0,.8)
  z-index 1001
</style>
