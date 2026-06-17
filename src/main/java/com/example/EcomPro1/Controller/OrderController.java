
package com.example.EcomPro1.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.EcomPro1.Entity.Orders;
import com.example.EcomPro1.Service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public Orders placeOrder(
            @RequestBody Orders order) {

        return orderService.placeOrder(order);
    }

    @GetMapping("/get")
    public List<Orders> getOrders() {

        return orderService.getAllOrders();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteOrder(
            @PathVariable Long id) {

        orderService.deleteOrder(id);

        return "Order Deleted";
    }
}