package com.spring.mssql.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.mssql.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}
