import styled from "styled-components";
import { TAB_ID_LIST, TAB_LIST, TabNameType } from "../../../../@types/maple/ComparisonTabTypes";
import NaviItem from "./NaviItem";

const StyledTab = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 44px;
  display: flex;
  margin: 0;
  margin-top: 24px;
`;

interface Props {
  currTab: string;
  setTab: React.Dispatch<React.SetStateAction<TabNameType>>;
}

const Navigation: React.FC<Props> = ({ currTab, setTab }) => {
  return (
    <StyledTab>
      {TAB_ID_LIST.map((tabId) => (
        <NaviItem key={tabId} currTab={currTab} clickHandler={setTab} value={tabId}>
          {TAB_LIST[tabId]}
        </NaviItem>
      ))}
    </StyledTab>
  );
};

export default Navigation;

