<template>
    <div>
      <home-header/>
      <foods-image/>
    </div>
</template>

<script>
    import HomeHeader from '../home/components/Header'
    import FoodsImage from './components/Image'
    export default {
        props: {
            food: {
                type:Object
            }
        },
        name: "Foods",
        components: {
            HomeHeader,
            FoodsImage
        }
    }
</script>

<style scoped>

</style>
