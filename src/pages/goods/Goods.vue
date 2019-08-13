<template>
  <div>
   <home-header/>
   <goods-wrapper :menuList="menuList"/>
  </div>
</template>

<script>
    import { getTopCategoryGoods} from '../../api/api';
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
              RightMenuTitles:[]
          }
        },
        mounted() {
            this.productId = this.$route.params.id;
            this.getCategory()
        },
        methods:{
            getCategory(){
                getCategory({id:this.productId}).then((response)=>{
                    let menulist = response.data;
                    this.menuList = menulist.sub_cat;
                    this.menuList.forEach((item)=>{
                        item.sub_cat.forEach((items)=>{
                            items.sub_content = [];
                            getTopCategoryGoods({id:items.id}).then((response)=>{
                                items.sub_content.push(response.data.results)
                            })
                        })
                    });
                    console.log(this.menuList)
                }).catch((err)=>{
                    console.log(err)
                })
            },
        }
    }
</script>

<style scoped>

</style>
