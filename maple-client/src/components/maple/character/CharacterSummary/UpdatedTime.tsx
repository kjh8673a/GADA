import React, { useEffect, useState } from "react";
import useCharacterBasic from "../../../../hooks/maple/useCharacterBasic";
import useCharacterUpdate from "../../../../hooks/maple/useCharacterUpdate";
import { useRecoilState } from "recoil";
import { isUpdated } from "../../../../atoms/maple/characterUpdateState";

const UpdatedTime = () => {
  const { characterBasic } = useCharacterBasic();
  const { detailDate } = useCharacterUpdate();
  const [nowDate, setNowDate] = useState<string>(
    detailDate(characterBasic.data?.updatedTime!)
  );
  const [_isUpdated, setIsUpdated] = useRecoilState(isUpdated);

  useEffect(() => {
    let time = detailDate(characterBasic.data?.updatedTime!);
    if (time.endsWith("초 전")) {
      setIsUpdated(true);
      let interval = setInterval(() => {
        time = detailDate(characterBasic.data?.updatedTime!);
        if (!time.endsWith("초 전")) {
          clearInterval(interval);
          setIsUpdated(false);
        }
        setNowDate(time);
      }, 1000);
    } else {
      setNowDate(time);
    }
  }, [characterBasic]);

  return <div>{nowDate}</div>;
};

export default UpdatedTime;
