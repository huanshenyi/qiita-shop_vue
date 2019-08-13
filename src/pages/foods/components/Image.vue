<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" :src="foodContent.goods_front_image" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "FoodsImage",
        props:['foodContent'],
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
            }
        }
    }
</script>

<style scoped lang="stylus">
  .wrapper  >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    height: 375px;
    width: 375px;
    z-index 30
    .swiper-img
      height: 375px;
      width 100%
      transition: all 300ms ease 0s;
</style>
