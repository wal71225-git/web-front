import axios from 'axios';
export default {
  getProducts () {
    return axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
  }
}