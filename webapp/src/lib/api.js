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