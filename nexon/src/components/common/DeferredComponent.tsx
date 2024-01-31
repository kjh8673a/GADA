import { PropsWithChildren, useEffect, useState } from "react";

const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState<boolean>(false);

  // 200ms가 지났을 때 children이 렌더링 되도록...
  useEffect(() => {
    setTimeout(() => {
      setIsDeferred(true);
    }, 2000);
  }, []);

  if (!isDeferred) return null;

  return <>{children}</>;
};

export default DeferredComponent;

