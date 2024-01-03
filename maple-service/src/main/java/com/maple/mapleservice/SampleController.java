package com.maple.mapleservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/maple-service")
public class SampleController {

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome to Maple Service.";
	}
}
