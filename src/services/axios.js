import axios from "axios";

const axiosOpenExInstance = axios.create({
  baseURL: "https://openexchangerates.org/api/",
  params: {
    app_id: process.env.EXPO_APP_ID_KEY,
  },
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosOpenExInstance;
