package com.spring.mssql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.spring.mssql.model.Customer;
import com.spring.mssql.model.OrderDetails;
import com.spring.mssql.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spring.mssql.model.Order;
import com.spring.mssql.repository.OrderRepository;

@CrossOrigin()
@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    private CustomerService customerService;

    @GetMapping("/Orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Integer id) {
        Optional<Order> orderData = orderRepository.findById(id);

        if (orderData.isPresent()) {
            return new ResponseEntity<>(orderData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/findWithCountryName")
    public List getSameCountry(@RequestParam("Find") String countryName) {
        return customerService.getOrdersDetailsSameOrder(countryName);
    }

    @GetMapping("/Orders")
    public ResponseEntity<List<Order>> getAllOrderOrders(@RequestParam(required = false) Integer orderId) {
        try {
            List<Order> od = new ArrayList<Order>();

            if (orderId == null)
                orderRepository.findAll().forEach(od::add);

            if (od.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(od, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
