<template>
  <div class="vipBar">
    <div class="content">
      <div class="bar-left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpaihangbang1"></use>
        </svg>
      </div>
      <div class="bar-title">プレミアム会員に加入すれば10%off</div>
      <div class="bar-right">
        <span class="iconfont">&#xe60b;</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "vipBar"
    }
</script>

<style scoped lang="stylus">
.vipBar
  height .7rem
  line-height .7rem
  margin: 7px 10px;
  background #eff1f3
  .content
    margin: 5px 8px;
    .bar-left
     float left
     .icon
      width: 1.5em;
      height: 1.5em;
      margin-top .15rem
    .bar-title
     float left
     padding-left .1rem
    .bar-right
     float right
     .iconfont
       font-family: "iconfont" !important;
       font-size: 16px;
       font-style: normal;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
</style>
