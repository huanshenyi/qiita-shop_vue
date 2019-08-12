<template>
    <div>
      <foods-image/>
      <foods-header/>
      <foods-price-bar/>
      <foods-vip-bar/>
      <foods-content-bar/>
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
    import FoodsFooter from './components/Footer'
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
            FoodsFooter
        }
    }
</script>

<style scoped lang="stylus">
.content
  height 10rem
</style>
