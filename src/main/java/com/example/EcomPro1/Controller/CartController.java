
package com.example.EcomPro1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.EcomPro1.Entity.Cart;
import com.example.EcomPro1.Service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    @GetMapping("/get")
    public List<Cart> getCartItems() {
        return cartService.getAllCartItems();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCartItem(@PathVariable Long id) {

        cartService.removeCartItem(id);

        return "Item Removed From Cart";
    }
}