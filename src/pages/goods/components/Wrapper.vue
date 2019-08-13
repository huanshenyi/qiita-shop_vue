<template>
    <div class="wrapper">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in menuList"
              :key="item.id"
              class="menu-item"
              @click="choiceItem(index)"
              ref="menuItem"
          >
            <span class="text">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="fondWrapper">
        <ul>

          <li v-for="item in rightMenuTitles" :key="item.id" class="fond-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="it in item.sub_content[0]" class="food-item" :key="it.id" @click="toFoods(it.id)">
                <div class="icon">
                  <img width="57" height="57" :src="it.goods_front_image" alt="">
                </div>
                <div class="content">
                  <h2 class="name" style="width: 4rem; overflow:hidden;white-space :nowrap ;text-overflow: ellipsis;margin:  2px 0 8px 0; height: 14px;line-height: 14px;font-size: 14px;color: rgb(7,17,27);
                  ">{{it.name}}</h2>
                  <p class="desc" style="width: 4rem;overflow:hidden;white-space :nowrap ;text-overflow: ellipsis;line-height:  10px;font-size: 10px;color: #93999f;margin-bottom: 8px
                   ">{{it.goods_brief}}</p>
                  <div class="extra" style="line-height:  10px;font-size: 10px;color: #93999f;line-height: 10px">
                    <span v-if="it.is_hot">
                      人気
                    </span>
                    <span v-else>
                      普通
                    </span>
                  </div>
                  <div class="price" style="font-weight: 700;line-height: 24px">
                    <span class = "now" style="margin-right: 8px;font-size: 14px; color: rgb(240, 20,20)">
                      {{it.shop_price}}円
                    </span>
                    <span class="old" style="font-size: 10px;color: #93999f">
                      {{it.market_price}}円(税込)
                    </span>
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
        props:{
            menuList:Array,
        },
        data (){
            return{
                rightMenuTitles:''
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
            },
            choiceItem(id){
                this.$refs.menuItem.forEach((dom)=>{
                    dom.style.background = "#f3f3f7"
                });
                this.$refs.menuItem[id].style.background= "#fff";
                this.rightMenuTitles = this.menuList[id].sub_cat;
            },
            toFoods(id){
                this.$router.push(`/foods/${id}`)
            }
        },
    }
</script>

<style scoped lang="stylus">
.wrapper
  display flex
  position absolute
  top .87rem
  bottom 0px
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
</style>
