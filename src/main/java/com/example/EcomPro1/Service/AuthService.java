package com.example.EcomPro1.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EcomPro1.Entity.User;
import com.example.EcomPro1.Repository.UserRepository;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepo;
	
	//Register
	public String register(User user) {
		
		Optional<User> existingUser = userRepo.findByEmail(user.getEmail());
		
		if(existingUser.isPresent()) {
			return "Email Already exists";
		}
		
		userRepo.save(user);
		return "Register Successful";
	}
	
	//Login
	public String login(String email, String password) {
		
		Optional<User> user = userRepo.findByEmail(email);
		
		if(user.isEmpty()) {
			return "User Not Found";
		}
		
		if(!user.get().getPassword().equals(password)) {
			return "Invalid Password";
		}
		return "Login Successful";
	} 
	
	

}
