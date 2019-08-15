<template>
    <div class="loginHeader">
      <div class="headerLeft">
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
          </svg>
        </router-link>
      </div>
      <div class="headerTitle">
        <div class="title">ログイン</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoginHeader"
    }
</script>

<style scoped lang="stylus">
.loginHeader
  display flex
  height .86rem
  line-height .86rem
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  position: relative
  .headerLeft
    margin-left .3rem
    float left
    .icon
      margin-top .2rem
      width: .4rem;
      height: .4rem;
  .headerTitle
    height .64rem
    font-size .4rem
    padding-left 2.2rem
</style>
