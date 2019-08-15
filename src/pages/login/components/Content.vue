<template>
    <div class="content">
      <div class="logo">
        logo
      </div>
      <div class="itemContent">
        <div class="login">
          <div class="input-container">
            <input type="text" class="username" placeholder="ユーザーネーム/アドレス">
          </div>
          <div class="input-container">
            <input type="text" class="username" placeholder="パスワード">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoginContent"
    }
</script>

<style scoped lang="stylus">
.content
  padding: 0 .25rem .25rem;
  .itemContent
    max-width: 7.5rem;
    margin: 0 auto;
    .input-container
      height: 100%;
      padding-top: .2rem;
      padding-bottom: .2rem;
      position: relative;
      overflow: hidden;
      margin-top: .4rem;
      background: #fff;
      border-bottom: .01rem solid #efefef;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .username
        width: 100%;
        padding: 0 .3rem 0 0;
        font-size: .3rem;
        line-height: normal;
        border-radius: 0;
        border: 0;
</style>
