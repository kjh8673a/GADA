import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import useAuction from "../../../hooks/useAuction";
import CenteredBox from "../../../style/CenteredBox";
import { CheckButton, NameSearch } from "../../../style/dnfContainer";
import StyledInput from "../../../style/StyledInput";
import Loading from "../../common/Loading";
import AuctionSearchFetchContainer from "./AuctionSearchFetchContainer";
import { searchAuction } from "../../../api/Auction";

const AuctionSearch = () => {
  const [searchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {
    searchKeyDownHandler,
    searchClickHandler,
    isValidInput,
  } = useAuction();
  const { fetchWrapper } = useFetch();

  return (
    <CenteredBox gap={15}>
      <NameSearch>
        <StyledInput
          $width={400}
          type="text"
          inputRef={inputRef}
          defaultValue={searchParams.get("input") as string}
          placeholder="아이템명(2자이상) 입력"
          onKeyDown={(e) => {
            searchKeyDownHandler(navigate, e, e.currentTarget.value);
          }}
          $marginTop={15}
        />
        <CheckButton
          src="/assets/search_button.png"
          alt="search"
          onClick={() => {
            searchClickHandler(navigate, inputRef.current!.value);
          }}
          $marginTop={15}
        />
      </NameSearch>
      {isValidInput(searchParams.get("input")) ? (
        <Suspense fallback={<Loading text="로딩중입니다" play={true} />}>
          <AuctionSearchFetchContainer
            data={fetchWrapper(
              searchAuction,
              searchParams.get("input") as string
            )}
            input={searchParams.get("input") as string}
          />
        </Suspense>
      ) : (
        <Loading text="아이템명은 2자이상만 검색 가능합니다." play={false} />
      )}
    </CenteredBox>
  );
};

export default AuctionSearch;
