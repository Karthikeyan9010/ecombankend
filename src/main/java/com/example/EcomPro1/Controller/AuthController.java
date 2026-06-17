package com.example.EcomPro1.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EcomPro1.Entity.User;
import com.example.EcomPro1.Service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	//Register
	@PostMapping("/register")
	public String register(@RequestBody User user) {
	   return authService.register(user);
	}
	
	//Login
	@PostMapping("/login")
	public String login(@RequestBody Map<String, String> loginData) {
		
		String email = loginData.get("email");
		String password = loginData.get("password");
		
		return authService.login(email, password);
	}

}
