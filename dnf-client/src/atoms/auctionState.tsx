import { atom } from "recoil";
import { TAuctionItem } from "../@types/Auction/AuctionItemTypes";

export const atomAuctionItemState = atom<TAuctionItem | undefined>({
  key: "atomAuctionItemState",
  default: undefined,
});
