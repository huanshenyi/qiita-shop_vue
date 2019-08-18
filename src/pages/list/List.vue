<template>
    <div>
      <list-header/>
      <list-filter-bar/>
      <list-content :listData="listData"/>
    </div>
</template>

<script>
  import ListHeader from './components/Header'
  import ListFilterBar from './components/FilterBar'
  import ListContent from './components/Content'
  import { search } from '../../api/api'
    export default {
        name: "List",
        components:{
            ListHeader,
            ListFilterBar,
            ListContent
        },
        data(){
            return{
                keyWord:'',
                listData:''
            }
        },
        created(){
           let key_world = this.$route.params.keyword;
           this.keyWord = key_world
           this.getSearchData()
        },
        methods:{
            getSearchData(){
                search(this.keyWord).then((response)=>{
                    // console.log(response.data.results)
                    this.listData = response.data.results
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="stylus">

</style>
