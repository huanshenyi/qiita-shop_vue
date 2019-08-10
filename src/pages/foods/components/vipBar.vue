<template>
  <div class="vipBar">
   <div class="bar-left">vip</div>
   <div class="bar-title">vip</div>
   <div class="bar-right">vip</div>
  </div>
</template>

<script>
    export default {
        name: "vipBar"
    }
</script>

<style scoped lang="stylus">
.vipBar
  height .86rem
  line-height .86rem
  margin: 7px 10px;
  background #eff1f3
  .bar-left
   float left
  .bar-title
   float left
   padding-left .1rem
  .bar-right
   float right
</style>
