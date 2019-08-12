<template>
  <div class="infoBar">
     <div class="infoBox">
       <div class="infoTitle">
         <svg class="icon">
           <use xlink:href="#iconshenbaogaozhi"></use>
         </svg>
         お知らせ
       </div>
       <swiper :options="swiperOption" class="infoSwiper">
         <swiper-slide class="infoText" v-for="item in infoText":key="item.id">
           {{item.info}}
         </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
     </div>
  </div>
</template>

<script>
    export default {
        name: 'HomeInfoBar',
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    autoplay:1500
                },
                infoText:[{id:'001',info:'test1test1test1test1test1test1test1test1test1test1'},
                    {id:'002',info:'test2test2test1test2test1test2test2test2test1test2test1test2'},
                    {id:'003',info:'test3test3test3test3test3test3'}]
            }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/mixins.styl"
.infoBar
 width 100%
 .infoBox
   position: relative;
   overflow hidden
   .infoTitle
     float left
     height: 35px;
     line-height 35px
     text-indent .4rem
     .icon
       width: 1.2em;
       height: 1.2em;
       line-height 35px
   .infoSwiper
     float right
     width: 263px;
     height: 35px;
     line-height 35px
     margin-bottom: 0px;
     .infoText
      ellipsis()
</style>
