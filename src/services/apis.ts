import { milePriceApi, loginApi } from "../utils/api"

export const getMilePrice = async (company?: string) => {
    let res = await milePriceApi.get(`${company}`)
    return res.data;
}

export const handleLogin = async (user: {username: string, password: string}) => {
    console.log(user);
    
    let res = await loginApi.post('/signin', {
        data: {
            "username": user.username,
            "password": user.password
        }
      })
      .then(function (response) {
        console.warn(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    return res;
}