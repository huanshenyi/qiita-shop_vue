<template>
 <div class="contentBar">
  <div class="title">{{foodContent.name}}</div>
  <div class="content">{{foodContent.goods_brief}}</div>
 </div>
</template>

<script>
    export default {
        name: "FoodsContentBar",
        props:['foodContent']
    }
</script>

<style scoped lang="stylus">
.contentBar
  padding: 0 10px 10px 10px;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  .title
    font-weight: 700;
    line-height: 24px;
    font-size: 16px;
  .content
    overflow: hidden;
    position: relative;
    padding 5px 20px 0 0;
    color: #999;
    max-height: none
</style>
