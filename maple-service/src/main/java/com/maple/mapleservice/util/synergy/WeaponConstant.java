package com.maple.mapleservice.util.synergy;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

@Getter
public class WeaponConstant {
	Map<String, Integer> constantMap = new HashMap<>() {
		{
			put("샤이닝로드", 347);
			put("소울슈터", 221);
			put("데스페라도", 295);
			put("에너지소드", 221);
			put("한손검", 283);

			put("한손도끼", 283);
			put("한손둔기", 283);
			put("단검", 276);
			put("케인", 283);
			put("완드", 347);

			put("스태프", 353);
			put("ESP리미터", 347);
			put("체인", 276);
			put("매직건틀렛", 347);
			put("부채", 276);

			put("튜너", 295);
			put("브레스슈터", 276);

			put("두손검", 295);
			put("두손도끼", 295);
			put("두손둔기", 295);
			put("창", 295);
			put("폴암", 264);

			put("활", 276);
			put("석궁", 283);
			put("아대", 149);
			put("너클", 221);
			put("건", 216);

			put("듀얼보우건", 276);
			put("핸드캐논", 302);
			put("건틀렛리볼버", 221);
			put("에인션트보우", 276);
			put("차크람", 276);

			put("태도", 293);
		}
	};

	public Long getWeaponConstant(String weapon_type, double weapon_level) {
		return (long)Math.floor((constantMap.get("활") - constantMap.get(weapon_type)) * (weapon_level / 200));
	}

}
