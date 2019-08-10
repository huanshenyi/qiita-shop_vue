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
    padding-right .3rem
    .icon
      padding-top .2rem
      width: 1.5em;
      height: 1.5em;
      overflow: hidden;
</style>
