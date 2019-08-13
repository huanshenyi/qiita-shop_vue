import axios from 'axios';


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
