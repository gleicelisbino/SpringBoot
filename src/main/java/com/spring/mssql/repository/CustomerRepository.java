package com.spring.mssql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.mssql.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, String> {
  List<Customer> findByCompanyNameContaining(String CustomerID);
}
