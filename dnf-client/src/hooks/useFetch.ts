import { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";

const useFetch = () => {
  const fetchWrapper = useCallback((fetch: Function, ...args: Array<any>) => {
    let status = "pending";
    let data: any;
    const suspender = fetch(...args)
      .then((res: AxiosResponse) => {
        data = res.data;
        status = "fulfilled";
      })
      .catch((e: AxiosError) => {
        data = e;
        status = "reject";
        if (e.response?.status === 404) {
          status = "fulfilled";
          data = undefined;
        }
      });
    return {
      read() {
        if (status === "pending") throw suspender;
        else if (status === "reject") throw data;
        else if (status === "fulfilled") return data;
      },
    };
  }, []);

  return {
    fetchWrapper,
  };
};

export default useFetch;
