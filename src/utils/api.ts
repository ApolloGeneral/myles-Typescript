import axios from 'axios';

export const milePriceApi = axios.create({
    baseURL: "https://mile-price-api.herokuapp.com/companies/"
})