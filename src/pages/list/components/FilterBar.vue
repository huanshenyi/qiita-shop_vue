<template>
 <div class="filter-bar">
   <div class="high-to-low">高い順</div>
   <div class="high-to-low">低い順</div>
   <div class="high-to-low">sect</div>
   <div class="high-to-low">sect</div>
 </div>
</template>

<script>
    export default {
        name: "ListFilterBar"
    }
</script>

<style scoped lang="stylus">
.filter-bar
  margin-top .05rem
  height .8rem
  background white
  line-height .8rem
  border-bottom #93999f solid .01rem
  .high-to-low
    float left
    margin-right .2rem
    height .7rem
    line-height .7rem
    width 22%
    color #333
    text-align center
    font-size .3rem
</style>
