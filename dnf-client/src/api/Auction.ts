import { https } from "./Https";

export const searchAuction = async (itemName: string) => {
  return await https({
    method: "get",
    url: "/auction/searchAuction",
    params: { itemName },
  });
};

export const getAuctionItem = async (itemId: string) => {
  return await https({
    method: "get",
    url: "/auction/getAuctionItem",
    params: { itemId },
  });
};

export const getPopularItems = async () => {
  return await https({
    method: "get",
    url: "/auction/getPopularItems",
  });
};
