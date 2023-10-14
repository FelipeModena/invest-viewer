import axios from "axios";

const axiosOpenExInstance = axios.create({
  baseURL: "https://openexchangerates.org/api/",
  params: {
    app_id: "33e45ab0d91d418196396a98aa323a91",
  },
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosOpenExInstance;
