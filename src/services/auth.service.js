import axios from "axios";

const baseUrl = process.env.REACT_APP_LOCAL_API || "http://localhost:8080";

const login = (username, password) => {
  return axios
    .post(`${baseUrl}/login`, {
      username,
      password,
    })
    .then((res) => {
      if (res.data.result.token) {
        localStorage.setItem("user", JSON.stringify(res.data.result.token));
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
