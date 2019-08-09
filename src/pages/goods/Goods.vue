<template>
  <div>
   <home-header/>
   <goods-wrapper/>
  </div>
</template>

<script>
    import HomeHeader from '../home/components/Header'
    import GoodsWrapper from './components/Wrapper'
    export default {
        name: "Goods",
        components: {
            HomeHeader,
            GoodsWrapper
        }
    }
</script>

<style scoped>

</style>
