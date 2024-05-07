import React from "react";
import { DropDownItem, DropDownList } from "../../style/DropDown";

interface Props {}

const DropDownBox = (props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <DropDownList ref={ref}>
      <DropDownItem href={"https://dnf.gada.app"}>
        <img src={"/assets/dnf_logo.svg"} alt="dnf logo" width={20} />
        <div style={{ color: "#a5a5a5" }}>던전앤파이터</div>
      </DropDownItem>
      <DropDownItem href={"https://maple.gada.app"}>
        <img src={"/assets/maple_logo.svg"} alt="maple logo" width={20} />
        <div style={{ fontWeight: "800" }}>메이플스토리</div>
      </DropDownItem>
    </DropDownList>
  );
};

export default React.forwardRef<HTMLDivElement, Props>(DropDownBox);
