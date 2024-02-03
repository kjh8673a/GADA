import { PropsWithChildren, useEffect, useState } from "react";
import ga4 from "react-ga4";
import { useLocation } from "react-router-dom";
import { extractInfoFromUrl } from "../../hooks/commonUtils";

const PAGE_NAME: { [key: string]: string } = {
  "": "메인 페이지",
  character: "캐릭터 조회",
  rank: "랭킹 조회",
  comparison: "캐릭터 비교",
  search: "길드&캐릭터 검색",
  party: "파티 구성",
};

const RouterTrackerForGA = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // 구글 애널리틱스 운영서버만 적용
  useEffect(() => {
    // if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS && !window.location.href.includes("localhost")) {
      ga4.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
      setInitialized(true);
    }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      const extracted = extractInfoFromUrl(location.pathname) || "";
      const pageTitle = PAGE_NAME[extracted];

      ga4.send({
        hitType: "pageview",
        path: location.pathname,
        location: location.pathname,
        title: pageTitle,
      });
    }
  }, [initialized, location]);

  return <>{children}</>;
};

export default RouterTrackerForGA;

