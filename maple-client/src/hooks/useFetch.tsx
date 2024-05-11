import { useCallback, useEffect, useState } from "react";
import { atomFetchError } from "../atoms/common/fetchErrorState";
import { useRecoilState } from "recoil";

const useFetch = <T, _>(fetch: (...args: any) => Promise<T>, ...args: any) => {
  const [_promise, _setPromise] = useState<Promise<void>>();
  const [_status, _setStatus] = useState<"pending" | "fullfilled" | "error">("pending");
  const [_result, _setResult] = useState<T>();
  const [_error, _setError] = useRecoilState<Error | null>(atomFetchError);

  const _resolvePromise = useCallback(
    (res: any) => {
      _setStatus("fullfilled");
      _setResult(res.data);
    },
    [_setResult]
  );

  const _rejectPromise = useCallback(
    (error: Error) => {
      _setStatus("error");
      _setError(error);
    },
    [_setError]
  );

  useEffect(() => {
    _setError(null);
    _setStatus("pending");
    _setPromise(fetch(...args).then(_resolvePromise, _rejectPromise));
  }, [fetch, _resolvePromise, _rejectPromise, _setError, ...args]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  if (_status === "error") {
    console.log("error");
    return _error;
    // throw _error;
  }

  return _result;
};

export default useFetch;

