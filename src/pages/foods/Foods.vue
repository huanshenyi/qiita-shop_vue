<template>
    <div>
      <foods-image :foodContent='foodContent'/>
      <foods-header/>
      <foods-price-bar :foodContent='foodContent'/>
      <foods-vip-bar/>
      <foods-content-bar :foodContent='foodContent'/>
      <foods-review-bar/>
      <foods-footer/>
      <div class="content"></div>
    </div>
</template>

<script>
    import FoodsHeader from './components/Header'
    import FoodsImage from './components/Image'
    import FoodsPriceBar from './components/PriceBar'
    import FoodsVipBar from './components/vipBar'
    import FoodsContentBar from './components/ContentBar'
    import FoodsReviewBar from './components/ReviewBar'
    import FoodsFooter from './components/Footer'
    import {getGood} from '../../api/api'
    export default {
        props: {
            food: {
                type:Object
            }
        },
        name: "Foods",
        components: {
            FoodsHeader,
            FoodsImage,
            FoodsPriceBar,
            FoodsVipBar,
            FoodsContentBar,
            FoodsReviewBar,
            FoodsFooter
        },
        data(){
          return {
              productId:'',
              foodContent:''
          }
        },
        mounted() {
            this.productId = this.$route.params.id;
            this.getGoodContent()
        },
        methods:{
            getGoodContent(){
                getGood({id:this.productId}).then((response)=>{
                    this.foodContent = response.data
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
.content
  height 10rem
</style>
