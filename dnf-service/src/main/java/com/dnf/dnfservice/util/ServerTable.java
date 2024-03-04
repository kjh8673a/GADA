package com.dnf.dnfservice.util;

import java.util.HashMap;
import java.util.Map;

public class ServerTable {
	public Map<String, String> serverIdToName = new HashMap<>() {
		{
			put("cain", "카인");
			put("diregie", "디레지에");
			put("siroco", "시로코");
			put("prey", "프레이");
			put("casillas", "카시야스");
			put("hilder", "힐더");
			put("anton", "안톤");
			put("bakal", "바칼");
		}
	};

	public Map<String, String> serverNameToId = new HashMap<>() {
		{
			put("카인", "cain");
			put("디레지에", "diregie");
			put("시로코", "siroco");
			put("프레이", "prey");
			put("카시야스", "casillas");
			put("힐더", "hilder");
			put("안톤", "anton");
			put("바칼", "bakal");
		}
	};
}
