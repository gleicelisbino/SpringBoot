package com.spring.mssql.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.mssql.model.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {

}
