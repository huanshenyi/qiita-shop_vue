<template>
  <div class="bar">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide class="span-info">おすすめ</swiper-slide>
        <swiper-slide class="swiper-slide"
                      v-for="swiperSlide in categorylist"
                      :key="swiperSlide.id">
          {{swiperSlide.name}}
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeBar",
        props:{
            categorylist:Array
        },
        data(){
            return {
                swiperOption: {slidesPerView : 5, slidesPerGroup : 5},
            }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../../assets/styles/varibles.st.styl"
.bar
  height .7rem
  line-height .7rem
  .swiper-slide
    margin-right .2rem
    height .7rem
    line-height .7rem
    width .1rem
    color #333
    text-align center
    font-size .3rem
    ellipsis()
  .span-info
    text-align center
    color  #87cefa
    font-weight:bold
    ellipsis()
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
