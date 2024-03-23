import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "../../../environments";

const Api = axios.create({
  baseURL: Environment.BASE_URL,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };
