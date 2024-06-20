import axios from "axios";

const REGISTER_URL = "/api/users";
const LOGIN_URL = "/api/users/login";

// Register user

const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const login = async (loginData) => {
  const response = await axios.post(LOGIN_URL, loginData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
