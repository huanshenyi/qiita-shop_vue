<template>
    <div>
      <list-header/>
      <list-filter-bar/>
      <list-content/>
    </div>
</template>

<script>
  import ListHeader from './components/Header'
  import ListFilterBar from './components/FilterBar'
  import ListContent from './components/Content'
    export default {
        name: "List",
        components:{
            ListHeader,
            ListFilterBar,
            ListContent
        }
    }
</script>

<style scoped lang="stylus">

</style>
