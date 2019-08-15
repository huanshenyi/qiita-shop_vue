<template>
    <div>
      <login-header/>
      <login-content/>
    </div>
</template>

<script>
    import LoginHeader from './components/Header'
    import LoginContent from './components/Content'
    export default {
        name: "Login",
        components:{
            LoginHeader,
            LoginContent
        }
    }
</script>

<style scoped lang="stylus">

</style>
