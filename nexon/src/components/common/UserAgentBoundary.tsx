import MobileBlockMasking from "./MobileBlockMasking";

interface Props {
  children: React.ReactNode;
}

const UserAgentBoundary: React.FC<Props> = ({ children }) => {
  const userAgent = window.navigator.userAgent;
  // 모바일 기기인지 확인하는 정규표현식
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  // userAgent에서 모바일 기기 여부 확인
  const isMobile = mobileRegex.test(userAgent);

  if (isMobile) return <MobileBlockMasking />;
  return <div>{children}</div>;
};

export default UserAgentBoundary;

