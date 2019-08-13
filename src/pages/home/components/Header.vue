<template>
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
          </svg>
        </router-link>
      </div>
      <div class="header-title">タイトル</div>
      <div class="header-right">
        <svg class="icon">
          <use xlink:href="#iconicon"></use>
        </svg>
      </div>
      <div class="header-right_one">
        <router-link to="/goods/1">
        <svg class="icon">
           <use xlink:href="#iconmore"></use>
        </svg>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="stylus">
.header
  display flex
  height .86rem
  line-height .86rem
  border-bottom: 1px solid #e5e5e5;
  .header-left
   margin-left .3rem
   width .64rem
   float left
   .icon
    margin-top .2rem
    width: .4rem;
    height: .4rem;
  .header-title
   flex 1
   text-align center
   height .64rem
   margin-left .6rem
   font-size .4rem
  .header-right
   width 1rem
   float right
   text-align center
   .icon
      margin-top .13rem
      width: .55rem;
      height: .55rem;
  .header-right_one
   width 1rem
   float right
   text-align center
   .icon
     margin-top .2rem
     width: .5rem;
     height: .5rem;
</style>
