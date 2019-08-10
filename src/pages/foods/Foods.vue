<template>
    <div>
      <home-header/>
      <foods-image/>
      <foods-price-bar/>
      <foods-vip-bar/>
      <foods-content-bar/>
    </div>
</template>

<script>
    import HomeHeader from '../home/components/Header'
    import FoodsImage from './components/Image'
    import FoodsPriceBar from './components/PriceBar'
    import FoodsVipBar from './components/vipBar'
    import FoodsContentBar from './components/ContentBar'
    export default {
        props: {
            food: {
                type:Object
            }
        },
        name: "Foods",
        components: {
            HomeHeader,
            FoodsImage,
            FoodsPriceBar,
            FoodsVipBar,
            FoodsContentBar
        }
    }
</script>

<style scoped>

</style>
