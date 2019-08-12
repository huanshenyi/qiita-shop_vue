<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon-item" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
            <p class="icon-desc">test</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data (){
            return {
                swiperOption:{},
                iconList :[{id:'0001',icon:'#iconjitui-'},{id:'0002',icon:'#iconhanbao-'},{id:'0003',icon:'#iconmianbao-'},
                    {id:'0004',icon:'#iconhuacai-'}, {id:'0005',icon:'#iconkaoyu-'},{id:'0006',icon:'#iconmogu'},
                    {id:'0007',icon:'#iconhongjiu-'},{id:'0008',icon:'#iconniupai-'},{id:'0009',icon:'#iconbaimifan-'}]
            }
        },
        computed:{
            pages() {
                const pages = [];
                this.iconList.forEach((item, index)=>{
                    const page = Math.floor(index / 8) //現在のiconが表示するページの何ページに表示すべき,2(index)/8=0.25 == 0 ==1ページめい
                    if (!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "../../../assets/styles/varibles.st.styl"
@import "../../../assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon-item
   position relative
   overflow hidden
   float left
   width 25%
   height 0
   padding-bottom 25%
   .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    box-sizing border-box
    padding .1rem
    .icon
     display block
     margin 0 auto
     height 100%
     width 100%
   .icon-desc
     position absolute
     left 0
     right 0
     bottom 0
     height .33rem
     line-height .44rem
     text-align center
     color $darkTextColor
     ellipsis()
</style>
