<template>
    <div class="search">
      <div class="search-left">
        <router-link to="/goods">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconel-icon-gengduo"></use>
          </svg>
        </router-link>
      </div>
      <div class="search-input">
        <span class="iconfont" style="padding-left: .3rem" @click="seardata">&#xe603;</span>
        <input type="text" placeholder="キーワードから探す" class="inputData" v-model="inputData">
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSearch",
        data (){
            return {
                inputData:''
            }
        },
        methods :{
            seardata(){
                console.log(this.inputData)
            }
        }
    }
</script>

<style scoped lang="stylus">
  .search
   margin-top .1rem
   height .86rem
   line-height .86rem
   color #fff
   .search-left
    position absolute
    margin-left .12rem
    width .64rem
    float left
    .icon
       margin-top .08rem
       width: .5rem;
       height: .5rem;
   .search-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .9rem
    background #f0f2f5
    border-radius .1rem
    color #ccc
    width: 84.3%;
    .inputData
     background: #f0f2f5
     padding-bottom .1rem
</style>
