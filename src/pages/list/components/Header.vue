<template>
    <div class="list-header">
      <div class="header-left">
        <svg class="icon" aria-hidden="true" @click="backTo">
          <use xlink:href="#iconarrow-left"></use>
        </svg>
      </div>
      <div class="header-main">真ん中</div>
      <div class="header-right">右側</div>
    </div>
</template>

<script>
    export default {
        name: "ListHeader",
        methods:{
            backTo(){
                window.history.back(-1);
            }
        }
    }
</script>

<style scoped lang="stylus">
.list-header
  height .86rem
  background white
  border-bottom #93999f solid .01rem
  .header-left
    margin-left .12rem
    width .64rem
    float left
    .icon
      margin-top .18rem
      width: .5rem;
      height: .5rem;
  .header-main
   margin-left 2.5rem
   line-height .86rem
   float left
   height 100%
  .header-right
    line-height .86rem
    float right
    height 100%
</style>
