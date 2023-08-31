import axios from 'axios'
import {baseUrl} from './constence/const'

const instance = axios.create({
  
  

    baseURL: baseUrl,

   
  })
 
  ;export default instance