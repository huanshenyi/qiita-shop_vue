<template>
    <div class="list-content" ref="listContent">
      <ul>
        <li class="wrapper" v-for="item in listData" :key="item.id" @click="toFoods(item.id)">
          <img class="icon" width="60" height="60" :src="item.goods_front_image">
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.goods_brief}}</div>
            <div class="price">
              <div class="price-tax-excluded">{{item.market_price}}円</div>
              <div class="price-now">{{item.shop_price}}円(税込)</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "ListContent",
        props:['listData'],
        mounted() {
            this.$nextTick(()=>{
                this._initScroll();
            });
        },
        methods:{
            _initScroll(){
                this.listContents = new Bscroll(this.$refs.listContent, {});
            },
            toFoods(id){
                this.$router.push(`/foods/${id}`)
            }
        }
    }
</script>

<style scoped lang="stylus">
.list-content
  width 100%
  overflow hidden
  position absolute
  .wrapper
    flex 1
    display flex
    margin 18px
    padding-bottom 15px
    border-bottom: 1px solid #e5e5e5;
    .icon
      flex 0 0 57px
      margin-right 10px
    .content
     font-size .2rem
     .name
       width: 4rem
       overflow:hidden
       white-space :nowrap
       text-overflow: ellipsis
       margin:  2px 0 8px 0
       height: 14px
       line-height: 14px
       font-size: 14px
       color: rgb(7,17,27)
     .desc
       width: 4rem
       overflow:hidden
       white-space :nowrap
       text-overflow: ellipsis
       line-height:10px
       font-size: 10px
       color: #93999f
       margin-bottom: 8px
     .price
      font-weight: 700
      line-height: 24px
      .price-tax-excluded
         margin-right: 8px
         font-size: 14px
         color: rgb(240, 20,20)
      .price-now
         font-size: 10px
         color: #93999f
</style>
