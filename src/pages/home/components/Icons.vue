<template>
  <div class="icons">
    <div class="icon-item">
      <div class="icon-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhot"></use>
        </svg>
        <p class="icon-desc">test</p>
      </div>
    </div>
    <div class="icon-item">
      <div class="icon-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhot"></use>
        </svg>
        <p class="icon-desc">test</p>
      </div>
    </div>
    <div class="icon-item">
      <div class="icon-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhot"></use>
        </svg>
        <p class="icon-desc">test</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons"
    }
</script>

<style scoped lang="stylus">
@import "../../../assets/styles/varibles.st.styl"
.icons
  overflow height
  height 0
  padding-bottom 50%
  .icon-item
   position relative
   overflow hidden
   float left
   width 25%
   height 0
   padding-bottom 25%
   .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    .icon
     display block
     margin 0 auto
     height 100%
     width 100%
   .icon-desc
     position absolute
     left 0
     right 0
     bottom 0
     height .3rem
     line-height .44rem
     text-align center
     color $darkTextColor
</style>
