package com.spring.mssql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.spring.mssql.model.Order;
import com.spring.mssql.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring.mssql.model.OrderDetails;

@CrossOrigin()
@RestController
@RequestMapping("/api")
public class OrderDetailsController {

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @GetMapping("/OrderDetails")
    public ResponseEntity<List<OrderDetails>> getAllOrderDetails(@RequestParam(required = false) Integer orderId) {

            List<OrderDetails> od = new ArrayList<OrderDetails>();

            if (orderId == null)
                orderDetailsRepository.findAll().forEach(od::add);

            if (od.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(od, HttpStatus.OK);

    }

        @PostMapping("/Products/")
    public @ResponseBody ResponseEntity<OrderDetails> batchCreate(@RequestBody List<OrderDetails> orderDetails) {
        OrderDetails _od = null;
        for (OrderDetails od : orderDetails ){
             _od =  orderDetailsRepository.save(new OrderDetails(od.getOrderID(), od.getProductID(), od.getDiscount(), od.getUnitPrice(), od.getQuantity()));
        }
       return new ResponseEntity<>(_od, HttpStatus.CREATED);
    }


}
