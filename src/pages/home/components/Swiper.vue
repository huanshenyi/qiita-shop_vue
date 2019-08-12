<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="https://sm.r10s.jp/contents/static/event/carousel/top_carousel_pricelock1906_pc.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://sm.r10s.jp/contents/static/event/carousel/top_carousel_1907_stamina_pc.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://sm.r10s.jp/contents/static/event/carousel/top_carousel_bigbet0725_pc.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    autoplay:1500
                },
                swiperList : [{
                    id: '0001',
                    imgUrl: ''
                },{

                }]
            }
        }
    }
</script>

<style scoped lang="stylus">
.wrapper  >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  .swiper-img
   width 100%
</style>
