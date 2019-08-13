<template>
  <div class="recommen">
    <div class="title">
      当店の人気商品
      <span class="titleTime">更新日: 2019年07月02日(火)</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendedList" :key="item.id">
          <img :src="item.img" class="item-img"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">{{item.price}}</p>
          <p class="item-price-2">{{item.price1}}</p>
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
        data(){
            return{
                recommendedList:[{id:'001',title:'《30年度産》新潟コシヒカリ',price:'1980円',price1:'(税込2138円)',img:'http://sm.r10s.jp/item/54/4979911762054.jpg'},
                    {id:'002',title:'みなさまのお墨付き ブロッコリー （冷凍）',price:'170円',price1:'(税込183円)',img:'https://sm.r10s.jp/item/06/4973450148706.jpg'}]
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
