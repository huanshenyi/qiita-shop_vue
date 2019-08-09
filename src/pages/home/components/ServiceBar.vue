<template>
    <div class="server-bar">
      <div class="icon-bar">
        <div class="tab-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconkefu"></use>
          </svg>
          <span>サポート</span>
        </div>
        <div class="tab-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconpinzhi"></use>
          </svg>
          <span>品質担保</span>
        </div>
        <div class="tab-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconkujialeqiyezhan_pinpaixilieguanli"></use>
          </svg>
          <span>品物厳選</span>
        </div>
        <div class="tab-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconhot"></use>
          </svg>
          <span>炎上注意</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeServiceBar"
    }
</script>

<style scoped lang="stylus">
  .icon-bar
    display flex
    width 100%
    height 30%
    line-height .5rem
    .tab-item
     flex 1
     text-align center
     .icon
       width: 1.3em;
       height: 1.3em;
       line-height 1em
</style>
