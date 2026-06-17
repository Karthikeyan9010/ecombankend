
package com.example.EcomPro1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EcomPro1.Entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

}