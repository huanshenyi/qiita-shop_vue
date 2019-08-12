<template>
    <div class="priceBar">
     <div class="bar-left">
       <div class="no-tex">
         2000円
       </div>
     </div>
     <div class="bar-left_two">
       <div class="tex">
         2100円(税込)
       </div>
     </div>
     <div class="bar_right">
       <svg class="icon">
         <use xlink:href="#iconguanzhu"></use>
       </svg>
     </div>
    </div>
</template>

<script>
    export default {
        name: "FoodsPriceBar"
    }
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/varibles.st.styl"
.priceBar
  margin-top .1rem
  height .86rem
  line-height .86rem
  .bar-left
    float left
    padding-left .2rem
    .no-tex
     text-align center
     color red
     font-size .4rem
  .bar-left_two
    margin-left .3rem
    float left
    .tex
     text-align center
     width 2rem
     color $darkTextColor
  .bar_right
    width 1rem
    text-align center
    float right
    .icon
      padding 0 .2rem
      padding-top .1rem
      width: 1.8em;
      height: 1.8em;
      overflow: hidden;
      border-left: 1px solid #e5e5e5;
</style>
