<template>
  <div>
   <home-header/>
   <goods-wrapper :menuList="menuList"/>
  </div>
</template>

<script>
    import { getCategory} from '../../api/api';
    import HomeHeader from '../home/components/Header'
    import GoodsWrapper from './components/Wrapper'
    export default {
        name: "Goods",
        components: {
            HomeHeader,
            GoodsWrapper
        },
        data(){
          return{
              productId:'',
              menuList :[],
              title:''
          }
        },
        mounted() {
            this.productId = this.$route.params.id;
            this.getCategory()
        },
        methods:{
            getCategory(){
                getCategory({id:this.productId}).then((response)=>{
                    this.title = response.data.name;
                    let menulist = response.data;
                    this.menuList = menulist.sub_cat;

                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
