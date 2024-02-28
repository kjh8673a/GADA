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
}
