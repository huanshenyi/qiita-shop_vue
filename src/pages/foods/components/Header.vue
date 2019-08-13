<template>
  <div>
    <div
      @click="backTo"
      class="header-abs"
      v-show="showAbs
     ">
      <div class="iconfont header-abs-back">&#xe606;</div>
    </div>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <div @click="backTo">
        <svg class="icon">
          <use xlink:href="#iconarrow-left"></use>
        </svg>
      </div>
      商品詳細1
    </div>
  </div>
</template>

<script>
    export default {
        name: "FoodsHeader",
        data (){
            return {
                showAbs:true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop;
                if(top > 60 ){
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {
                        opacity: opacity
                    };
                    this.showAbs = false
                }else {
                    this.showAbs = true
                }
            },
            backTo(){
                window.history.back(-1);
            }
        },
        mounted() {
            window.addEventListener('scroll',() => {
                this.handleScroll();
            }, false)
        }
    }
</script>

<style scoped lang="stylus">
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  border-radius .4rem
  line-height .8rem
  text-align center
  background rgba(0,0,0,.8)
  z-index 1001
  .header-abs-back
   color #ffffff
   font-size .4rem
.header-fixed
 height .86rem
 line-height .86rem
 position fixed
 top 0
 left 0
 right 0
 text-align center
 color #777
 font-size .32rem
 z-index 2
 background white
 .icon
   padding-left .1rem
   position absolute
   top 0
   left 0
   width: 2em;
   height: 2em;
   text-align center
   line-height 2em
   margin-top .1rem
</style>
