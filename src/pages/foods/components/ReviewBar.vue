<template>
    <div class="reviewbar">
      <div class="title">
        <div class="title-left">レビュー</div>
        <div class="title-icon"> ></div>
        <div class="title-right">計xx個 </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FoodsReviewBar"
    }
</script>

<style scoped lang="stylus">
.reviewbar
  padding: 0 10px;
  display: block;
  min-height: 45px;
  border-bottom 1px solid #e5e5e5
  .title
    padding: 10px 0;
    color: #333;
    .title-left
     float left
    .title-right
     float right
     padding-right .1rem
    .title-icon
     float right

</style>
