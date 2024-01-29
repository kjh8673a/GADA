import styled from "styled-components";
import { IStatType } from "../../../../@types/maple/StatsTypes";
import ComparisonStatusItem from "./ComparisonStatusItem";

interface Props {
  leftStat: IStatType | undefined;
  rightStat: IStatType | undefined;
}

const StyledBox = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;

const ComparisonStatus: React.FC<Props> = ({ leftStat, rightStat }) => {
  return (
    <StyledBox>
      {/* 전투력 */}
      <ComparisonStatusItem
        statName="전투력"
        left={leftStat?.final_stats?.전투력}
        right={rightStat?.final_stats?.전투력}
        type="NUMBER"
      />
      {/* HP */}
      <ComparisonStatusItem
        statName="HP"
        left={leftStat?.final_stats?.hp}
        right={rightStat?.final_stats?.hp}
        type="NUMBER"
      />
      {/* MP */}
      <ComparisonStatusItem
        statName="MP"
        left={leftStat?.final_stats?.mp}
        right={rightStat?.final_stats?.mp}
        type="NUMBER"
      />
      {/* STR */}
      <ComparisonStatusItem
        statName="STR"
        left={leftStat?.final_stats?.str}
        right={rightStat?.final_stats?.str}
        type="NUMBER"
      />
      {/* DEX */}
      <ComparisonStatusItem
        statName="DEX"
        left={leftStat?.final_stats?.dex}
        right={rightStat?.final_stats?.dex}
        type="NUMBER"
      />
      {/* INT */}
      <ComparisonStatusItem
        statName="INT"
        left={leftStat?.final_stats?.int}
        right={rightStat?.final_stats?.int}
        type="NUMBER"
      />
      {/* LUK */}
      <ComparisonStatusItem
        statName="LUK"
        left={leftStat?.final_stats?.luk}
        right={rightStat?.final_stats?.luk}
        type="NUMBER"
      />
      {/* 스탯공격력 */}
      <ComparisonStatusItem
        statName="스탯공격력"
        left={leftStat?.final_stats?.최대_스탯공격력}
        right={rightStat?.final_stats?.최대_스탯공격력}
        type="NUMBER"
      />
      {/* 데미지 */}
      <ComparisonStatusItem
        statName="데미지"
        left={leftStat?.final_stats?.데미지}
        right={rightStat?.final_stats?.데미지}
        type="PERCENT"
      />
      {/* 최종 데미지 */}
      <ComparisonStatusItem
        statName="최종 데미지"
        left={leftStat?.final_stats?.최종_데미지}
        right={rightStat?.final_stats?.최종_데미지}
        type="PERCENT"
      />
      {/* 방어율 무시 */}
      <ComparisonStatusItem
        statName="방어율 무시"
        left={leftStat?.final_stats?.방어율_무시}
        right={rightStat?.final_stats?.방어율_무시}
        type="PERCENT"
      />
      {/* 보스 몬스터 데미지 */}
      <ComparisonStatusItem
        statName="보스 몬스터 데미지"
        left={leftStat?.final_stats?.보스_몬스터_데미지}
        right={rightStat?.final_stats?.보스_몬스터_데미지}
        type="PERCENT"
      />
      {/* 일반 몬스터 데미지 */}
      <ComparisonStatusItem
        statName="일반 몬스터 데미지"
        left={leftStat?.final_stats?.일반_몬스터_데미지}
        right={rightStat?.final_stats?.일반_몬스터_데미지}
        type="PERCENT"
      />
      {/* 공격력 */}
      <ComparisonStatusItem
        statName="공격력"
        left={leftStat?.final_stats?.공격력}
        right={rightStat?.final_stats?.공격력}
        type="NUMBER"
      />
      {/* 마력 */}
      <ComparisonStatusItem
        statName="마력"
        left={leftStat?.final_stats?.마력}
        right={rightStat?.final_stats?.마력}
        type="NUMBER"
      />
      {/* 크리티컬 확률 */}
      <ComparisonStatusItem
        statName="크리티컬 확률"
        left={leftStat?.final_stats?.크리티컬_확률}
        right={rightStat?.final_stats?.크리티컬_확률}
        type="PERCENT"
      />
      {/* 크리티컬 데미지 */}
      <ComparisonStatusItem
        statName="크리티컬 데미지"
        left={leftStat?.final_stats?.크리티컬_데미지}
        right={rightStat?.final_stats?.크리티컬_데미지}
        type="PERCENT"
      />
      {/* 재사용 대기시간 */}
      <ComparisonStatusItem
        statName="재사용 대기시간"
        left={leftStat?.final_stats?.["재사용_대기시간_감소_(초)"]}
        right={rightStat?.final_stats?.["재사용_대기시간_감소_(%)"]}
        left2={leftStat?.final_stats?.["재사용_대기시간_감소_(%)"]}
        right2={rightStat?.final_stats?.["재사용_대기시간_감소_(%)"]}
        type="SEC/PERCENT"
      />
      {/* 재사용 대기시간 미적용 */}
      <ComparisonStatusItem
        statName="재사용 대기시간 미적용"
        left={leftStat?.final_stats?.재사용_대기시간_미적용}
        right={rightStat?.final_stats?.재사용_대기시간_미적용}
        type="PERCENT"
      />
      {/* 속성 내성 무시 */}
      <ComparisonStatusItem
        statName="속성 내성 무시"
        left={leftStat?.final_stats?.속성_내성_무시}
        right={rightStat?.final_stats?.속성_내성_무시}
        type="PERCENT"
      />
      {/* 상태 이상 추가데미지 */}
      <ComparisonStatusItem
        statName="상태 이상 추가데미지"
        left={leftStat?.final_stats?.상태이상_추가_데미지}
        right={rightStat?.final_stats?.상태이상_추가_데미지}
        type="PERCENT"
      />
      {/* 무기 숙련도 */}
      <ComparisonStatusItem
        statName="무기 숙련도"
        left={leftStat?.final_stats?.무기_숙련도}
        right={rightStat?.final_stats?.무기_숙련도}
        type="PERCENT"
      />
      {/* 메소 획득량 */}
      <ComparisonStatusItem
        statName="메소 획득량"
        left={leftStat?.final_stats?.메소_획득량}
        right={rightStat?.final_stats?.메소_획득량}
        type="PERCENT"
      />
      {/* 아이템 드롭률 */}
      <ComparisonStatusItem
        statName="아이템 드롭률"
        left={leftStat?.final_stats?.아이템_드롭률}
        right={rightStat?.final_stats?.아이템_드롭률}
        type="PERCENT"
      />
      {/* 추가 경험치 획득 */}
      <ComparisonStatusItem
        statName="추가 경험치 획득"
        left={leftStat?.final_stats?.추가_경험치_획득}
        right={rightStat?.final_stats?.추가_경험치_획득}
        type="PERCENT"
      />
      {/* 방어력 */}
      <ComparisonStatusItem
        statName="방어력"
        left={leftStat?.final_stats?.방어력}
        right={rightStat?.final_stats?.방어력}
        type="NUMBER"
      />
      {/* 이동속도 */}
      <ComparisonStatusItem
        statName="이동속도"
        left={leftStat?.final_stats?.이동속도}
        right={rightStat?.final_stats?.이동속도}
        type="PERCENT"
      />
      {/* 스탠스 */}
      <ComparisonStatusItem
        statName="스탠스"
        left={leftStat?.final_stats?.스탠스}
        right={rightStat?.final_stats?.스탠스}
        type="PERCENT"
      />
      {/* 상태이상 내성 */}
      <ComparisonStatusItem
        statName="상태이상 내성"
        left={leftStat?.final_stats?.상태이상_내성}
        right={rightStat?.final_stats?.상태이상_내성}
        type="NUMBER"
      />
      {/* 점프력 */}
      <ComparisonStatusItem
        statName="점프력"
        left={leftStat?.final_stats?.점프력}
        right={rightStat?.final_stats?.점프력}
        type="NUMBER"
      />
      {/* 공격 속도 */}
      <ComparisonStatusItem
        statName="공격 속도"
        left={leftStat?.final_stats?.공격_속도}
        right={rightStat?.final_stats?.공격_속도}
        type="NUMBER"
      />
      {/* 스타포스 */}
      <ComparisonStatusItem
        statName="스타포스"
        left={leftStat?.final_stats?.스타포스}
        right={rightStat?.final_stats?.스타포스}
        type="PERCENT"
      />
      {/* 아케인포스 */}
      <ComparisonStatusItem
        statName="아케인포스"
        left={leftStat?.final_stats?.아케인포스}
        right={rightStat?.final_stats?.아케인포스}
        type="NUMBER"
      />
      {/* 어센틱포스 */}
      <ComparisonStatusItem
        statName="어센틱포스"
        left={leftStat?.final_stats?.어센틱포스}
        right={rightStat?.final_stats?.어센틱포스}
        type="NUMBER"
      />
    </StyledBox>
  );
};

export default ComparisonStatus;

