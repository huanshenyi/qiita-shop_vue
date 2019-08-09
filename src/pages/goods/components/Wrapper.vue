<template>
    <div class="wrapper">
      <div class="menu-wrapper">
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
      <div class="foods-wrapper">
        <ul>
          <li class="food-list">
            <h1 class="title">item.name</h1>
            <ul>
              <!--カテゴリー下の商品をループ-->
              <li class="food-item">
                <div class="icon">
                  <img src="http://m.360buyimg.com/babel/jfs/t19567/187/857930264/49035/55d5abda/5aab5ae3N1e6a6451.png" alt="">
                </div>
                <div class="content">
                  <h2 class="name">food.name</h2>
                  <p class="desc">food.description</p>
                  <div class="extra">
                    <span>人気food.click</span>
                    <span>評判food.rating%</span>
                  </div>
                  <div class="price">
                    <span>¥food.price</span>
                    <span>¥food.oldprice</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li class="food-list">
            <h1 class="title">item.name</h1>
            <ul>
              <!--カテゴリー下の商品をループ-->
              <li class="food-item">
                <div class="icon">
                  <img src="http://m.360buyimg.com/babel/jfs/t19567/187/857930264/49035/55d5abda/5aab5ae3N1e6a6451.png" alt="">
                </div>
                <div class="content">
                  <h2 class="name">food.name</h2>
                  <p class="desc">food.description</p>
                  <div class="extra">
                    <span>人気food.click</span>
                    <span>評判food.rating%</span>
                  </div>
                  <div class="price">
                    <span>¥food.price</span>
                    <span>¥food.oldprice</span>
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
    export default {
        name: "Wrapper",
        data (){
            return{
                testMenu:[{id:'1',name:'item1'},{id:'2',name:'item2'},{id:'3',name:'item3'},
                    {id:'4',name:'item4'},{id:'5',name:'item5'},{id:'6',name:'item6'},
                    {id:'7',name:'item7'},{id:'8',name:'item8'},{id:'9',name:'item9'},{id:'10',name:'item10'}]
            }
        },
        created() {
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
</style>
