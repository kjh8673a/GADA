import React from 'react';
import CenteredBox from '../../style/CenteredBox';
import { useSearchParams } from 'react-router-dom';

const Character = () => {
  const [searchParams,] = useSearchParams();
  return (
    <CenteredBox>
      {`${searchParams.get("server")} 서버의 ${searchParams.get("character")}님 조회 페이지`}
    </CenteredBox>
  );
};

export default Character;