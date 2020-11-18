import { milePriceApi, loginApi } from "../utils/api";

export const getMilePrice = async (company?: string) => {
  let res = await milePriceApi.get(`${company}`);
  return res.data;
};

export const handleLogin = async (username: string, password: string) => {
  const rawResponse = await fetch(
    "https://myles-login.herokuapp.com/api/auth/signin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );
  const content = await rawResponse.json();

  /*
  let res = await loginApi
    .post("/signin", {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
    .then(function (response) {
      console.warn(response);
    })
    .catch(function (error) {
      console.error(error);
    });
    */
  return content;
};

export const handleSignUpApi = async (
  name: string,
  email: string,
  password: string
) => {
  const rawResponse = await fetch(
    "https://myles-login.herokuapp.com/api/auth/signup",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
        role: ["user"],
      }),
    }
  );
  console.log({
    username: name,
    email: email,
    password: password,
    role: ["user"],
  });
  const content = await rawResponse.json();

  /*
  let res = await loginApi
    .post("/signin", {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
    .then(function (response) {
      console.warn(response);
    })
    .catch(function (error) {
      console.error(error);
    });
    */
  return content;
};
