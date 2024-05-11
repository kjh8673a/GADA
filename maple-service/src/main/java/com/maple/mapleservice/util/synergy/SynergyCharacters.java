package com.maple.mapleservice.util.synergy;

import java.util.HashMap;
import java.util.Map;

import com.maple.mapleservice.util.CharacterClassName;
import com.maple.mapleservice.dto.model.synergy.SynergyCharacter;
import com.maple.mapleservice.util.synergy.characters.나이트로드;
import com.maple.mapleservice.util.synergy.characters.나이트워커;
import com.maple.mapleservice.util.synergy.characters.다크나이트;
import com.maple.mapleservice.util.synergy.characters.데몬슬레이어;
import com.maple.mapleservice.util.synergy.characters.데몬어벤져;
import com.maple.mapleservice.util.synergy.characters.듀얼블레이더;
import com.maple.mapleservice.util.synergy.characters.라라;
import com.maple.mapleservice.util.synergy.characters.루미너스;
import com.maple.mapleservice.util.synergy.characters.메르세데스;
import com.maple.mapleservice.util.synergy.characters.메카닉;
import com.maple.mapleservice.util.synergy.characters.미하일;
import com.maple.mapleservice.util.synergy.characters.바이퍼;
import com.maple.mapleservice.util.synergy.characters.배틀메이지;
import com.maple.mapleservice.util.synergy.characters.보우마스터;
import com.maple.mapleservice.util.synergy.characters.블래스터;
import com.maple.mapleservice.util.synergy.characters.비숍;
import com.maple.mapleservice.util.synergy.characters.섀도어;
import com.maple.mapleservice.util.synergy.characters.소울마스터;
import com.maple.mapleservice.util.synergy.characters.스트라이커;
import com.maple.mapleservice.util.synergy.characters.신궁;
import com.maple.mapleservice.util.synergy.characters.아델;
import com.maple.mapleservice.util.synergy.characters.아란;
import com.maple.mapleservice.util.synergy.characters.아크;
import com.maple.mapleservice.util.synergy.characters.아크메이지_불_독;
import com.maple.mapleservice.util.synergy.characters.아크메이지_썬_콜;
import com.maple.mapleservice.util.synergy.characters.에반;
import com.maple.mapleservice.util.synergy.characters.엔젤릭버스터;
import com.maple.mapleservice.util.synergy.characters.와일드헌터;
import com.maple.mapleservice.util.synergy.characters.윈드브레이커;
import com.maple.mapleservice.util.synergy.characters.은월;
import com.maple.mapleservice.util.synergy.characters.일리움;
import com.maple.mapleservice.util.synergy.characters.제논;
import com.maple.mapleservice.util.synergy.characters.제로;
import com.maple.mapleservice.util.synergy.characters.카데나;
import com.maple.mapleservice.util.synergy.characters.카이저;
import com.maple.mapleservice.util.synergy.characters.카인;
import com.maple.mapleservice.util.synergy.characters.칼리;
import com.maple.mapleservice.util.synergy.characters.캐논마스터;
import com.maple.mapleservice.util.synergy.characters.캡틴;
import com.maple.mapleservice.util.synergy.characters.키네시스;
import com.maple.mapleservice.util.synergy.characters.팔라딘;
import com.maple.mapleservice.util.synergy.characters.패스파인더;
import com.maple.mapleservice.util.synergy.characters.팬텀;
import com.maple.mapleservice.util.synergy.characters.플레임위자드;
import com.maple.mapleservice.util.synergy.characters.호영;
import com.maple.mapleservice.util.synergy.characters.히어로;

import lombok.Getter;

@Getter
public class SynergyCharacters {
	나이트로드 나이트로드 = new 나이트로드();
	나이트워커 나이트워커 = new 나이트워커();
	다크나이트 다크나이트 = new 다크나이트();
	데몬슬레이어 데몬슬레이어 = new 데몬슬레이어();
	데몬어벤져 데몬어벤져 = new 데몬어벤져();
	듀얼블레이더 듀얼블레이더 = new 듀얼블레이더();
	라라 라라 = new 라라();
	루미너스 루미너스 = new 루미너스();
	메르세데스 메르세데스 = new 메르세데스();
	메카닉 메카닉 = new 메카닉();

	미하일 미하일 = new 미하일();
	바이퍼 바이퍼 = new 바이퍼();
	배틀메이지 배틀메이지 = new 배틀메이지();
	보우마스터 보우마스터 = new 보우마스터();
	블래스터 블래스터 = new 블래스터();
	비숍 비숍 = new 비숍();
	섀도어 섀도어 = new 섀도어();
	소울마스터 소울마스터 = new 소울마스터();
	스트라이커 스트라이커 = new 스트라이커();
	신궁 신궁 = new 신궁();
	아델 아델 = new 아델();

	아란 아란 = new 아란();
	아크 아크 = new 아크();
	아크메이지_불_독 아크메이지_불_독 = new 아크메이지_불_독();
	아크메이지_썬_콜 아크메이지_썬_콜 = new 아크메이지_썬_콜();
	에반 에반 = new 에반();
	엔젤릭버스터 엔젤릭버스터 = new 엔젤릭버스터();
	와일드헌터 와일드헌터 = new 와일드헌터();
	윈드브레이커 윈드브레이커 = new 윈드브레이커();
	은월 은월 = new 은월();
	일리움 일리움 = new 일리움();
	제논 제논 = new 제논();

	제로 제로 = new 제로();
	카데나 카데나 = new 카데나();
	카이저 카이저 = new 카이저();
	카인 카인 = new 카인();
	칼리 칼리 = new 칼리();
	캐논마스터 캐논마스터 = new 캐논마스터();
	캡틴 캡틴 = new 캡틴();
	키네시스 키네시스 = new 키네시스();
	팔라딘 팔라딘 = new 팔라딘();
	패스파인더 패스파인더 = new 패스파인더();
	팬텀 팬텀 = new 팬텀();

	플레임위자드 플레임위자드 = new 플레임위자드();
	호영 호영 = new 호영();
	히어로 히어로 = new 히어로();

	Map<String, SynergyCharacter> synergyCharacters = new HashMap<>() {
		{
			put(CharacterClassName.나이트로드.name(),
				new SynergyCharacter(
					나이트로드.getCharacter_class(),
					나이트로드.getCycle(),
					나이트로드.getSkill_type(),
					나이트로드.getSkill_desc(),
					나이트로드.getIncreaseVolume(),
					나이트로드.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.나이트워커.name(),
				new SynergyCharacter(
					나이트워커.getCharacter_class(),
					나이트워커.getCycle(),
					나이트워커.getSkill_type(),
					나이트워커.getSkill_desc(),
					나이트워커.getIncreaseVolume(),
					나이트워커.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.다크나이트.name(),
				new SynergyCharacter(
					다크나이트.getCharacter_class(),
					다크나이트.getCycle(),
					다크나이트.getSkill_type(),
					다크나이트.getSkill_desc(),
					다크나이트.getIncreaseVolume(),
					다크나이트.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.데몬슬레이어.name(),
				new SynergyCharacter(
					데몬슬레이어.getCharacter_class(),
					데몬슬레이어.getCycle(),
					데몬슬레이어.getSkill_type(),
					데몬슬레이어.getSkill_desc(),
					데몬슬레이어.getIncreaseVolume(),
					데몬슬레이어.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.데몬어벤져.name(),
				new SynergyCharacter(
					데몬어벤져.getCharacter_class(),
					데몬어벤져.getCycle(),
					데몬어벤져.getSkill_type(),
					데몬어벤져.getSkill_desc(),
					데몬어벤져.getIncreaseVolume(),
					데몬어벤져.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.듀얼블레이더.name(),
				new SynergyCharacter(
					듀얼블레이더.getCharacter_class(),
					듀얼블레이더.getCycle(),
					듀얼블레이더.getSkill_type(),
					듀얼블레이더.getSkill_desc(),
					듀얼블레이더.getIncreaseVolume(),
					듀얼블레이더.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.라라.name(),
				new SynergyCharacter(
					라라.getCharacter_class(),
					라라.getCycle(),
					라라.getSkill_type(),
					라라.getSkill_desc(),
					라라.getIncreaseVolume(),
					라라.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.루미너스.name(),
				new SynergyCharacter(
					루미너스.getCharacter_class(),
					루미너스.getCycle(),
					루미너스.getSkill_type(),
					루미너스.getSkill_desc(),
					루미너스.getIncreaseVolume(),
					루미너스.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.메르세데스.name(),
				new SynergyCharacter(
					메르세데스.getCharacter_class(),
					메르세데스.getCycle(),
					메르세데스.getSkill_type(),
					메르세데스.getSkill_desc(),
					메르세데스.getIncreaseVolume(),
					메르세데스.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.메카닉.name(),
				new SynergyCharacter(
					메카닉.getCharacter_class(),
					메카닉.getCycle(),
					메카닉.getSkill_type(),
					메카닉.getSkill_desc(),
					메카닉.getIncreaseVolume(),
					메카닉.getStatWeightForCalculate()
				)
			);

			put(CharacterClassName.미하일.name(),
				new SynergyCharacter(
					미하일.getCharacter_class(),
					미하일.getCycle(),
					미하일.getSkill_type(),
					미하일.getSkill_desc(),
					미하일.getIncreaseVolume(),
					미하일.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.바이퍼.name(),
				new SynergyCharacter(
					바이퍼.getCharacter_class(),
					바이퍼.getCycle(),
					바이퍼.getSkill_type(),
					바이퍼.getSkill_desc(),
					바이퍼.getIncreaseVolume(),
					바이퍼.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.배틀메이지.name(),
				new SynergyCharacter(
					배틀메이지.getCharacter_class(),
					배틀메이지.getCycle(),
					배틀메이지.getSkill_type(),
					배틀메이지.getSkill_desc(),
					배틀메이지.getIncreaseVolume(),
					배틀메이지.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.보우마스터.name(),
				new SynergyCharacter(
					보우마스터.getCharacter_class(),
					보우마스터.getCycle(),
					보우마스터.getSkill_type(),
					보우마스터.getSkill_desc(),
					보우마스터.getIncreaseVolume(),
					보우마스터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.블래스터.name(),
				new SynergyCharacter(
					블래스터.getCharacter_class(),
					블래스터.getCycle(),
					블래스터.getSkill_type(),
					블래스터.getSkill_desc(),
					블래스터.getIncreaseVolume(),
					블래스터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.비숍.name(),
				new SynergyCharacter(
					비숍.getCharacter_class(),
					비숍.getCycle(),
					비숍.getSkill_type(),
					비숍.getSkill_desc(),
					비숍.getIncreaseVolume(),
					비숍.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.섀도어.name(),
				new SynergyCharacter(
					섀도어.getCharacter_class(),
					섀도어.getCycle(),
					섀도어.getSkill_type(),
					섀도어.getSkill_desc(),
					섀도어.getIncreaseVolume(),
					섀도어.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.소울마스터.name(),
				new SynergyCharacter(
					소울마스터.getCharacter_class(),
					소울마스터.getCycle(),
					소울마스터.getSkill_type(),
					소울마스터.getSkill_desc(),
					소울마스터.getIncreaseVolume(),
					소울마스터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.스트라이커.name(),
				new SynergyCharacter(
					스트라이커.getCharacter_class(),
					스트라이커.getCycle(),
					스트라이커.getSkill_type(),
					스트라이커.getSkill_desc(),
					스트라이커.getIncreaseVolume(),
					스트라이커.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.신궁.name(),
				new SynergyCharacter(
					신궁.getCharacter_class(),
					신궁.getCycle(),
					신궁.getSkill_type(),
					신궁.getSkill_desc(),
					신궁.getIncreaseVolume(),
					신궁.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.아델.name(),
				new SynergyCharacter(
					아델.getCharacter_class(),
					아델.getCycle(),
					아델.getSkill_type(),
					아델.getSkill_desc(),
					아델.getIncreaseVolume(),
					아델.getStatWeightForCalculate()
				)
			);

			put(CharacterClassName.아란.name(),
				new SynergyCharacter(
					아란.getCharacter_class(),
					아란.getCycle(),
					아란.getSkill_type(),
					아란.getSkill_desc(),
					아란.getIncreaseVolume(),
					아란.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.아크.name(),
				new SynergyCharacter(
					아크.getCharacter_class(),
					아크.getCycle(),
					아크.getSkill_type(),
					아크.getSkill_desc(),
					아크.getIncreaseVolume(),
					아크.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.아크메이지_불_독.name(),
				new SynergyCharacter(
					아크메이지_불_독.getCharacter_class(),
					아크메이지_불_독.getCycle(),
					아크메이지_불_독.getSkill_type(),
					아크메이지_불_독.getSkill_desc(),
					아크메이지_불_독.getIncreaseVolume(),
					아크메이지_불_독.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.아크메이지_썬_콜.name(),
				new SynergyCharacter(
					아크메이지_썬_콜.getCharacter_class(),
					아크메이지_썬_콜.getCycle(),
					아크메이지_썬_콜.getSkill_type(),
					아크메이지_썬_콜.getSkill_desc(),
					아크메이지_썬_콜.getIncreaseVolume(),
					아크메이지_썬_콜.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.에반.name(),
				new SynergyCharacter(
					에반.getCharacter_class(),
					에반.getCycle(),
					에반.getSkill_type(),
					에반.getSkill_desc(),
					에반.getIncreaseVolume(),
					에반.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.엔젤릭버스터.name(),
				new SynergyCharacter(
					엔젤릭버스터.getCharacter_class(),
					엔젤릭버스터.getCycle(),
					엔젤릭버스터.getSkill_type(),
					엔젤릭버스터.getSkill_desc(),
					엔젤릭버스터.getIncreaseVolume(),
					엔젤릭버스터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.와일드헌터.name(),
				new SynergyCharacter(
					와일드헌터.getCharacter_class(),
					와일드헌터.getCycle(),
					와일드헌터.getSkill_type(),
					와일드헌터.getSkill_desc(),
					와일드헌터.getIncreaseVolume(),
					와일드헌터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.윈드브레이커.name(),
				new SynergyCharacter(
					윈드브레이커.getCharacter_class(),
					윈드브레이커.getCycle(),
					윈드브레이커.getSkill_type(),
					윈드브레이커.getSkill_desc(),
					윈드브레이커.getIncreaseVolume(),
					윈드브레이커.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.은월.name(),
				new SynergyCharacter(
					은월.getCharacter_class(),
					은월.getCycle(),
					은월.getSkill_type(),
					은월.getSkill_desc(),
					은월.getIncreaseVolume(),
					은월.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.일리움.name(),
				new SynergyCharacter(
					일리움.getCharacter_class(),
					일리움.getCycle(),
					일리움.getSkill_type(),
					일리움.getSkill_desc(),
					일리움.getIncreaseVolume(),
					일리움.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.제논.name(),
				new SynergyCharacter(
					제논.getCharacter_class(),
					제논.getCycle(),
					제논.getSkill_type(),
					제논.getSkill_desc(),
					제논.getIncreaseVolume(),
					제논.getStatWeightForCalculate()
				)
			);

			put(CharacterClassName.제로.name(),
				new SynergyCharacter(
					제로.getCharacter_class(),
					제로.getCycle(),
					제로.getSkill_type(),
					제로.getSkill_desc(),
					제로.getIncreaseVolume(),
					제로.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.카데나.name(),
				new SynergyCharacter(
					카데나.getCharacter_class(),
					카데나.getCycle(),
					카데나.getSkill_type(),
					카데나.getSkill_desc(),
					카데나.getIncreaseVolume(),
					카데나.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.카이저.name(),
				new SynergyCharacter(
					카이저.getCharacter_class(),
					카이저.getCycle(),
					카이저.getSkill_type(),
					카이저.getSkill_desc(),
					카이저.getIncreaseVolume(),
					카이저.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.카인.name(),
				new SynergyCharacter(
					카인.getCharacter_class(),
					카인.getCycle(),
					카인.getSkill_type(),
					카인.getSkill_desc(),
					카인.getIncreaseVolume(),
					카인.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.칼리.name(),
				new SynergyCharacter(
					칼리.getCharacter_class(),
					칼리.getCycle(),
					칼리.getSkill_type(),
					칼리.getSkill_desc(),
					칼리.getIncreaseVolume(),
					칼리.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.캐논마스터.name(),
				new SynergyCharacter(
					캐논마스터.getCharacter_class(),
					캐논마스터.getCycle(),
					캐논마스터.getSkill_type(),
					캐논마스터.getSkill_desc(),
					캐논마스터.getIncreaseVolume(),
					캐논마스터.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.캡틴.name(),
				new SynergyCharacter(
					캡틴.getCharacter_class(),
					캡틴.getCycle(),
					캡틴.getSkill_type(),
					캡틴.getSkill_desc(),
					캡틴.getIncreaseVolume(),
					캡틴.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.키네시스.name(),
				new SynergyCharacter(
					키네시스.getCharacter_class(),
					키네시스.getCycle(),
					키네시스.getSkill_type(),
					키네시스.getSkill_desc(),
					키네시스.getIncreaseVolume(),
					키네시스.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.팔라딘.name(),
				new SynergyCharacter(
					팔라딘.getCharacter_class(),
					팔라딘.getCycle(),
					팔라딘.getSkill_type(),
					팔라딘.getSkill_desc(),
					팔라딘.getIncreaseVolume(),
					팔라딘.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.패스파인더.name(),
				new SynergyCharacter(
					패스파인더.getCharacter_class(),
					패스파인더.getCycle(),
					패스파인더.getSkill_type(),
					패스파인더.getSkill_desc(),
					패스파인더.getIncreaseVolume(),
					패스파인더.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.팬텀.name(),
				new SynergyCharacter(
					팬텀.getCharacter_class(),
					팬텀.getCycle(),
					팬텀.getSkill_type(),
					팬텀.getSkill_desc(),
					팬텀.getIncreaseVolume(),
					팬텀.getStatWeightForCalculate()
				)
			);

			put(CharacterClassName.플레임위자드.name(),
				new SynergyCharacter(
					플레임위자드.getCharacter_class(),
					플레임위자드.getCycle(),
					플레임위자드.getSkill_type(),
					플레임위자드.getSkill_desc(),
					플레임위자드.getIncreaseVolume(),
					플레임위자드.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.호영.name(),
				new SynergyCharacter(
					호영.getCharacter_class(),
					호영.getCycle(),
					호영.getSkill_type(),
					호영.getSkill_desc(),
					호영.getIncreaseVolume(),
					호영.getStatWeightForCalculate()
				)
			);
			put(CharacterClassName.히어로.name(),
				new SynergyCharacter(
					히어로.getCharacter_class(),
					히어로.getCycle(),
					히어로.getSkill_type(),
					히어로.getSkill_desc(),
					히어로.getIncreaseVolume(),
					히어로.getStatWeightForCalculate()
				)
			);
		}
	};

}

