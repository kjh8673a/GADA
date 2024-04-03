import React, { Suspense } from "react";
import CenteredBox from "../../../style/CenteredBox";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../common/Loading";
import ItemFetchContainer from "./ItemFetchContainer";
import { getAuctionItem } from "../../../api/Auction";

const AuctionItem = () => {
  const [searchParams] = useSearchParams();
  const { fetchWrapper } = useFetch();
  return (
    <CenteredBox>
      <Suspense fallback={<Loading text="로딩중입니다" play={true} />}>
        <ItemFetchContainer
          data={fetchWrapper(getAuctionItem, searchParams.get("itemId"))}
        />
      </Suspense>
    </CenteredBox>
  );
};

export default AuctionItem;
