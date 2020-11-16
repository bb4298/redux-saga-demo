import axios from "axios";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
