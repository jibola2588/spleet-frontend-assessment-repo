import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL

export const serviceInstance = axios.create({
    baseURL: baseURL
  });