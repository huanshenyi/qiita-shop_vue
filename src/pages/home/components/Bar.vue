<template>
  <div class="bar">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide class="span-info">人気</swiper-slide>
        <swiper-slide class="swiper-slide"
                      v-for="(swiperSlide,index) in swiperSlides"
                      :key="index">{{swiperSlide}}</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeBar",
        data(){
            return {
                swiperOption: {slidesPerView : 5, slidesPerGroup : 5},
                swiperSlides: ['描き', 'キャンプ', 'スポーツ', 'python', '成人', 'ドラマ', 'ニュース', '映画', 'ペット', 'キャンプ']
            }
        },
    }
</script>

<style scoped lang="stylus">
.bar
  height .7rem
  line-height .7rem
  .swiper-slide
    width .1rem
    color #333
    text-align center
    font-size .3rem
    overflow hidden
    text-overflow ellipsis
  .span-info
    color  #87cefa
    font-weight:bold
  .span-info:before
    content ""
    position absolute
    left 50%
    bottom 0
    width 1rem
    height 0.05rem
    z-index 2
    transform translate(-50%,0)
    background #87cefa
</style>
