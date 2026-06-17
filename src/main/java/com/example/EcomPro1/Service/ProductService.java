package com.example.EcomPro1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EcomPro1.Entity.Product;
import com.example.EcomPro1.Repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepo;
	
	//
	public List<Product> getAllProducts(){
		return productRepo.findAll();
	}
	
	//
	public Product addProduct(Product product) {
		return productRepo.save(product);
	}

}
