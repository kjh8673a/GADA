import axios from "axios";

export const https = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});