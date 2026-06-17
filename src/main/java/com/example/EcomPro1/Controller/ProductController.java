package com.example.EcomPro1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EcomPro1.Entity.Product;
import com.example.EcomPro1.Service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productservice;
	
	@GetMapping("/get")
	public List<Product> getAllProduct(){
		return productservice.getAllProducts();
	}
	
	@PostMapping("/add")
	public Product addProduct(@RequestBody Product product) {
        return productservice.addProduct(product);
    }
	
}