<template>
    <div class="footerBar">
      <div class="footerItem">
        <router-link to="/" tag="div">
          <div class="homeIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshouye"></use>
            </svg>
            <span class="centent">
              ホーム
            </span>
          </div>
        </router-link>
        <router-link to="/" tag="div">
          <div class="homeIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconbiaoqian"></use>
            </svg>
            <span class="centent">
              タグ
            </span>
          </div>
        </router-link>
        <router-link to="/" tag="div">
          <div class="homeIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconpaihangbang"></use>
            </svg>
            <span class="centent">
              ランキング
            </span>
          </div>
        </router-link>
        <router-link to="/" tag="div">
          <div class="homeIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshangcheng"></use>
            </svg>
            <span class="centent">
              ブランド
            </span>
          </div>
        </router-link>
        <router-link to="/" tag="div">
          <div class="homeIcon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjuhui"></use>
            </svg>
            <span class="centent">
              人気
            </span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFooter"
    }
</script>

<style scoped lang="stylus">
.footerBar
  border-top: 1px solid #e5e5e5;
  position fixed
  bottom 0
  height 50px
  width 100%
  .footerItem
   left 0
   right 0
   z-index 1001
   .homeIcon
    display block
    width 20%
    height 50px
    float left
    text-align center
    position relative
    .icon
     margin 0 12px
     padding-top .1rem
     width: 2em;
     height: 2em;
    .centent
     font-size .2rem
     display block
     overflow hidden
</style>
