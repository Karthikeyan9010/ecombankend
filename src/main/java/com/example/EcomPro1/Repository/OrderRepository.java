
package com.example.EcomPro1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EcomPro1.Entity.Orders;

public interface OrderRepository
        extends JpaRepository<Orders, Long> {

}