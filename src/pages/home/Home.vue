<template>
  <div>
    <home-header/>
    <home-bar/>
    <home-search/>
    <home-swiper/>
    <home-service-bar/>
    <home-icons/>
    <home-info-bar/>
    <home-recommended/>
    <home-footer-top/>
    <home-footer/>
  </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeBar from './components/Bar'
    import HomeSearch from './components/Search'
    import HomeSwiper from './components/Swiper'
    import HomeServiceBar from './components/ServiceBar'
    import HomeIcons from './components/Icons'
    import HomeInfoBar from './components/InfoBar'
    import HomeRecommended from './components/Recommended'
    import HomeFooterTop from './components/FooterTop'
    import HomeFooter from './components/footer'
    export default {
        name: "Home",
        components:{
            HomeHeader,
            HomeBar,
            HomeSearch,
            HomeSwiper,
            HomeServiceBar,
            HomeIcons,
            HomeFooter,
            HomeRecommended,
            HomeFooterTop,
            HomeInfoBar
        }
    }
</script>

<style scoped>

</style>
