import AxiosClient from "./axiosClient.js";

export default class ProductService {
    constructor(){
        this.client = new AxiosClient()
    }
    getProducts = () => {
        const info = {url:`https://ecommapi-production-ce2e.up.railway.app/api/productos`}
        return this.client.makeGetRequest(info)
    }
    getProductsbyCategory = (category) => {
        const info = {url:`https://ecommapi-production-ce2e.up.railway.app/api/productos/category/${category}`}
        return this.client.makeGetRequest(info)
    }
    getProductById = (id) => {
        const info = {url:`https://ecommapi-production-ce2e.up.railway.app/api/productos/${id}`}
        return this.client.makeGetRequest(info)
    }
    postProduct = (data) => {
        const info = {
            url: 'https://ecommapi-production-ce2e.up.railway.app/api/productos/admin/post',
            method: 'POST',
            body: data,
            config: {
                'withCredentials': 'true',
                'Content-Type': 'multipart/form-data'
            }
        }
        return this.client.makePostRequest(info)
    }
    putProduct = (id, data) => {
        const info = {
            url: `https://ecommapi-production-ce2e.up.railway.app/api/productos/${id}`,
            body: data,
            config:{
                'withCredentials': 'true',
                'Content-Type': 'application/json'
            }
        }
        return this.client.makePutRequest(info)
    }
}