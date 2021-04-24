import axios from 'axios'
const api = axios.create({
  baseURL: 'https://hila-bankapp.herokuapp.com/bank/',

})

export default api
