import { FormValues } from "../components/AuthForm";
import axios, { AxiosResponse } from "axios";

export const auth = (values: FormValues): Promise<{"name":string}> =>
  axios
    .post("/api/auth", values, {headers:{contentType:'application/json'}})
    .then((response: AxiosResponse<{"name":string}>) => {
      return response.data;
    });
