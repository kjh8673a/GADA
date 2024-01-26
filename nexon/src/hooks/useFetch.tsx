import { useEffect, useState } from "react";

const useFetch = <T, I>(fetch: (arg: I) => Promise<T>, arg: I) => {
  const [_promise, _setPromise] = useState<Promise<void>>();
  const [_status, _setStatus] = useState<"pending" | "fullfilled" | "error">("pending");
  const [_result, _setResult] = useState<T>();
  const [_error, _setError] = useState<Error>();

  const _resolvePromise = (res: any) => {
    _setStatus("fullfilled");
    _setResult(res.data);
  };

  const _rejectPromise = (error: Error) => {
    _setStatus("error");
    _setError(error);
  };

  useEffect(() => {
    _setStatus("pending");
    _setPromise(fetch(arg).then(_resolvePromise, _rejectPromise));
  }, [fetch, arg]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  if (_status === "error") {
    console.error(_error);
    throw _error;
  }

  return _result;
};

export default useFetch;

