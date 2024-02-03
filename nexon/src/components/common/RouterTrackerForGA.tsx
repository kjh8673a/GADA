import { PropsWithChildren, useEffect, useState } from "react";
import ga4 from "react-ga4";
import { useLocation } from "react-router-dom";

const RouterTrackerForGA = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // 구글 애널리틱스 운영서버만 적용
  useEffect(() => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
      // if (process.env.REACT_APP_GOOGLE_ANALYTICS && !window.location.href.includes("localhost")) {
      ga4.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
      setInitialized(true);
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ga4.set({ page: location.pathname });
      ga4.send("pageview");
    }
  }, [initialized, location]);

  return <>{children}</>;
};

export default RouterTrackerForGA;

