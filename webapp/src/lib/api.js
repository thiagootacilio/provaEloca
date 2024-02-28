import axios from 'axios'

const BaseUrl ="http://localhost:8001";
export function get(url, params) {
    return axios({
        method: 'GET',
        url: BaseUrl+url,
        params: params
    })
}

export function byMethod(method, url, data) {
    return axios({
        method: method,
        url: BaseUrl+"/"+url,
        data: data
    })
}

export function postByHeaders(url, data) {  
    var config = {};
    return axios.post(BaseUrl+"/"+url, data, config);
}

axios.interceptors.response.use(
    response => response,
    error => {
      const status = error.response ? error.response.status : null;

      if(error.response.data.message){
        alert(error.response.data.message);
      }

      
      if (status === 401) {
        // Handle unauthorized access
      } else if (status === 404) {
        // Handle not found errors
      } else {
        // Handle other errors
      }
      
      return Promise.reject(error);
    }
  );