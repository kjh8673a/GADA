import React, { Suspense, useRef } from "react";
import CenteredBox from "../../style/CenteredBox";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { CheckButton, MainImg, NameSearch } from "../../style/dnfContainer";
import StyledInput from "../../style/StyledInput";
import useAuction from "../../hooks/useAuction";
import PopularItemsSkeleton from "./PopularItemsSkeleton";
import PopularItems from "./PopularItems";
import { getPopularItems } from "../../api/Auction";

const Auction = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { searchKeyDownHandler, searchClickHandler } = useAuction();
  const { fetchWrapper } = useFetch();
  return (
    <CenteredBox>
      <MainImg src="/assets/danzin.png" alt="Danzin" />
      <NameSearch>
        <StyledInput
          inputRef={inputRef}
          $width={400}
          type="text"
          placeholder="아이템명(2자이상) 입력"
          onKeyDown={(e) => {
            searchKeyDownHandler(navigate, e, e.currentTarget.value);
          }}
        />
        <CheckButton
          src="/assets/search_button.png"
          alt="search"
          onClick={() => {
            searchClickHandler(navigate, inputRef.current?.value as string);
          }}
        />
      </NameSearch>
      <Suspense fallback={<PopularItemsSkeleton />}>
        <PopularItems data={fetchWrapper(getPopularItems)} />
      </Suspense>
    </CenteredBox>
  );
};

export default Auction;
