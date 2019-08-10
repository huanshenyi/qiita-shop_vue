<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="//img12.360buyimg.com/imgzone/jfs/t1/10433/27/11408/259233/5c6e05a7E85440065/44fd8b61455d0790.jpg!q70.dpg.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s843x843_jfs/t24217/234/2598606598/960056/57a36d33/5b875b86N2c150cb9.png.webp" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "FoodsImage",
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
    width 100%
    z-index 30
    .swiper-img
      height: 375px;
      width 100%
      transition: all 300ms ease 0s;
</style>
