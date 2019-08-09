<template>
    <div class="wrapper">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="item in testMenu"
              :key="item.id"
              class="menu-item"
          >
            <span class="text">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="fondWrapper">
        <ul>
          <li v-for="(item, index) in testLIst" :key="index" class="fond-list">
            <h1 class="title">三階のタイトル{{item}}</h1>
            <ul>
              <li v-for="items in sabuLIst" class="food-item">
                <div class="icon">
                  <img width="57" height="57" src="//m.360buyimg.com/babel/s231x231_jfs/t30022/196/396908357/131040/c86e6534/5bf21f3bN13e57a8a.jpg!q70.dpg" alt="">
                </div>
                <div class="content">
                  <h2 class="name">商品name{{items}}</h2>
                  <p class="desc">商品詳細</p>
                  <div class="extra">
                    <span>人気food.click</span>
                    <span>人気あるかどうか</span>
                  </div>
                  <div class="price">
                    <span>税抜金額</span>
                    <span>税込価格</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
     </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "Wrapper",
        data (){
            return{
                testMenu:[{id:'1',name:'item1'},{id:'2',name:'item2'},{id:'3',name:'item3'},
                    {id:'4',name:'item4'},{id:'5',name:'item5'},{id:'6',name:'item6'},
                    {id:'7',name:'item7'},{id:'8',name:'item8'},{id:'9',name:'item9'},{id:'10',name:'item10'}],
                testLIst :[1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,6,7,8,9,10,11,12,13,14,15,16,17,18,19,],
                sabuLIst :[1,2,4]
            }
        },
       mounted(){
            this.$nextTick(()=>{
                this._initScroll();
            });

       },
        methods: {
            _initScroll(){
                this.meunScroll = new Bscroll(this.$refs.menuWrapper, {});
                this.foodsScroll = new Bscroll(this.$refs.fondWrapper, {});
            }
        }
    }
</script>

<style scoped lang="stylus">
.wrapper
  display flex
  position absolute
  top .87rem
  bottom 80px
  width 100%
  overflow hidden
  .menu-wrapper
   flex 0 0 80px
   width 80px
   background #f3f3f7
   .menu-item
    display table
    height 54px
    width 56px
    line-height 14px
    border-bottom: 1px solid #e5e5e5;
    padding 0 12px
    .text
     display table-cell
     width 56px
     vertical-align middle
     font-size 12px
  .foods-wrapper
   flex 1
   .title
    padding-left 14px
    height 26px
    line-height 26px
    border-left 2px solid #d9dde1
    font-size 12px
    color rgb(147,153,159)
    background #f3f3f7
   .food-item
    display flex
    margin 18px
    padding-bottom 18px
    border-bottom: 1px solid #e5e5e5;
    .icon
     flex 0 0 57px
     margin-right 10px
    .contain
     flex 1
     .name
      margin 2px 0 8px 0
      height 14px
      line-height 14px
      font-size :14px
      color:rgb(7,17,27)
</style>
