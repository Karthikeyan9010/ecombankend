
package com.example.EcomPro1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EcomPro1.Entity.Orders;
import com.example.EcomPro1.Repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Orders placeOrder(Orders order) {

        order.setStatus("PLACED");

        return orderRepository.save(order);
    }

    public List<Orders> getAllOrders() {

        return orderRepository.findAll();
    }

    public void deleteOrder(Long id) {

        orderRepository.deleteById(id);
    }
}