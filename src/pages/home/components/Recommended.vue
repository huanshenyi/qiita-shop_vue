<template>
  <div class="recommen">
    <div class="title">
      当店の人気商品
      <span class="titleTime">更新日: 2019年07月02日(火)</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in hotList" :key="item.id">
          <img :src="item.goods_front_image" class="item-img"/>
        <div class="item-info">
          <p class="item-title">{{item.name}}</p>
          <p class="item-price">{{item.market_price}}円</p>
          <p class="item-price-2">{{item.shop_price}}円(税込)</p>
          <svg class="icon">
            <use xlink:href="#iconqicheqianlian-1"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommended",
        props:{
            hotList:Array
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/mixins.styl"
.recommen
  margin-top .1rem
  margin-bottom .1rem
  .title
   margin-top .2rem
   line-height .8rem
   background #eee
   text-indent .3rem
   font-size .35rem
   color red
   .titleTime
     color #93999f
     font-size .23rem
  .item
   overflow hidden
   display flex
   height 1.9rem
   .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
   .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
     line-height .54rem
     font-size .32rem
     ellipsis()
    .item-price
     line-height .4rem
     color red
    .item-price-2
      line-height .3rem
      color #ccc
    .icon
      float right
      line-height .44rem
      margin-top .1rem
      width: 2em;
      height: 2em;
      padding 0 .2rem
</style>
