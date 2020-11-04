import { milePriceApi } from "../utils/api"

export const getMilePrice = async (company?: string) => {
    let res = await milePriceApi.get(`${company}`)
    return res.data;
}