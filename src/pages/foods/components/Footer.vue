<template>
    <div class="footerBar">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <svg class="icon">
                <use xlink:href="#iconqicheqianlian-1"></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="content-center">
          <div class="text">
            <div class="iconfont">&#xe608;</div>
            <div>出品者連絡</div>
          </div>
        </div>
        <div class="content-center">
          <div class="text">
           <div class="iconfont">&#xe607;</div>
            <div>店舗に入る</div>
          </div>
        </div>
        <div class="content-right">
          <div class="text">
            かごに追加
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FoodsFooter"
    }
</script>

<style scoped lang="stylus">
 .footerBar
   position:fixed;
   left:0
   bottom:0
   width:100%;
   height:48px;
   z-index:50
   border-top: 1px solid #e5e5e5;
   .content
    display flex
    background #ffffff
    font-size 0
    .content-left
     background #25a4bb
     flex 1
     .logo-wrapper
      background #25a4bb
      display inline-block
      vertical-align top
      position relative
      top -10px
      margin 0 12px
      padding 6px
      width 56px
      height 56px
      box-sizing border-box
      border-radius 50%
      .logo
       width 100%
       height 100%
       border-radius 50%
       background #ffffff
       text-align center
       .icon
         line-height 44px
         width .8rem
         height .8rem
     .price
      display inline-block
      vertical-align top
      margin-top 12px
      line-height 24px
      padding-right 12px
      box-sizing border-box
      border-right 1px solid rgba(255,255,255,0.1)
      font-size 16px
      font-weight 700
     .desc
      display inline-block
    .content-center
      width 80px
      background #ffffff
      font-size 10px
      font-weight 700
      .text
        vertical-align top
        margin-top 5px
        margin-left .5rem
        line-height 24px
        color #93999f
        .iconfont
          font-family: "iconfont" !important;
          margin-left: .2rem;
          font-size: 30px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
    .content-right
     flex 0 0 105px
     width 105px
     background red
     font-size 16px
     font-weight 700
     .text
       vertical-align top
       margin-top 12px
       margin-left .2rem
       line-height 24px
       color #eaeaea
</style>
