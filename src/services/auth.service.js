import axios from "axios";

const baseUrl = "http://localhost:8080";

console.log("baseUrl: ", baseUrl);

const login = (username, password) => {
  return axios
    .post(`${baseUrl}/login`, {
      username,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
