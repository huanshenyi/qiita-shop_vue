import axios from 'axios';
let host = '';
let localHost = 'http://127.0.0.1:8000';

//商品カテゴリー
export const getCategory = (params=null) => {
  if('id' in params){
    return axios.get(`${localHost}/categorys/`+params.id+'/');
  }
  else {
    return axios.get(`${localHost}/categorys/`);
  }
};

// カテゴリーに基づいてる商品
export const  getTopCategoryGoods = (params)=>{
  if('id' in params){
    return axios.get(`${localHost}/goods/?pricemin=&pricemax=&is_hot=&topcategory=${params.id}`)
  }else {
    return axios.get(`${localHost}/goods/?pricemin=&pricemax=&is_hot=&topcategory=`)
  }

};
//商品詳細を取得
export const getGood = (params)=>{
  return axios.get(`${localHost}/goods/${params.id}`)
};
//キーワードで商品検索
export const searchDoods = (params)=>{
  return axios.get(`${localHost}/goods/?search=${params.keyword}`)
}

//売れて商品
export const getHotGoods = (params)=>{
  if('topcategory' in params ){
    return axios.get(`${localHost}/goods/?pricemin=&pricemax=&is_hot=true&topcategory=`+params.topcategory+'/');
  }else {
    return axios.get(`${localHost}/goods/?pricemin=&pricemax=&is_hot=true&topcategory=`);
  }
};

//ログイン
export const login = params => {
  return axios.post(`${localHost}/login/`, params)
};
