package com.maple.mapleservice.feign;

import com.maple.mapleservice.dto.feign.ranking.RankingGuildDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.maple.mapleservice.config.FeignConfig;
import com.maple.mapleservice.dto.feign.ranking.RankingOverallDto;
import com.maple.mapleservice.dto.feign.ranking.RankingUnionDto;

@FeignClient(name = "ranking-api", url = "${feign.maple.url}" + "/ranking", configuration = FeignConfig.class)
public interface RankingFeignClient {
	@GetMapping("/union")
	RankingUnionDto rankingUnionDto(@RequestParam String ocid, @RequestParam String date, @RequestParam String world_name);

	@GetMapping("/overall")
	RankingOverallDto rankingOverallDto(@RequestParam String date, @RequestParam int world_type, @RequestParam int page);

	@GetMapping("/overall")
	RankingOverallDto rankingOverallDto(@RequestParam String date, @RequestParam int page);

	@GetMapping("/guild")
	RankingGuildDto rankingGuildDto(@RequestParam String date, @RequestParam String world_name, @RequestParam int ranking_type, @RequestParam int page);


}
