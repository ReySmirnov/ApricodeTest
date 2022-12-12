import { FormValues } from "../components/AuthForm";
import axios, { AxiosResponse } from "axios";

export const auth = (values: FormValues): Promise<Record<string, string>> =>
  axios
    .post("/api/auth", values)
    .then((response: AxiosResponse<Record<string, string>>) => {
      return response.data;
    });
