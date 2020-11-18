import axios from 'axios';

export const milePriceApi = axios.create({
    baseURL: "https://mile-price-api.herokuapp.com/companies/"
})

export const loginApi = axios.create({
    baseURL: "https://myles-login.herokuapp.com/api/auth/"
})