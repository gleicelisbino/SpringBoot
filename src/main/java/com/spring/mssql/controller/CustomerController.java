package com.spring.mssql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.spring.mssql.model.Customer;
import com.spring.mssql.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CustomerController  {

	@Autowired
    CustomerRepository customerRepository;

	@GetMapping("/Customers")
	public ResponseEntity<List<Customer>> getAllCustomers(@RequestParam(required = false) String CustomerID) {
		try {
			List<Customer> customers = new ArrayList<Customer>();

				customerRepository.findAll().forEach(customers::add);

			if (customers.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(customers, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/Customers/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("id") String id) {
		Optional<Customer> customerData = customerRepository.findById(id);

		if (customerData.isPresent()) {
			return new ResponseEntity<>(customerData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/Customers/{id}")
	public ResponseEntity<Customer> createCustomer(@PathVariable("id") String id,@RequestBody Customer customer) {
		Customer _customer = customerRepository
					.save(new Customer(id,
							customer.getCompanyName(),
							customer.getContactName(),
							customer.getContactTitle(),
							customer.getAddress(),
							customer.getCity(),
							customer.getRegion(),
							customer.getPostalCode(),
							customer.getCountry(),
							customer.getPhone(),
							customer.getFax()));
			return new ResponseEntity<>(_customer, HttpStatus.CREATED);
	}

	@PutMapping("/Customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("id") String id, @RequestBody Customer customer) {
		Optional<Customer> customerData = customerRepository.findById(id);

		if (customerData.isPresent()) {
			Customer _customer = customerData.get();
			_customer.setCustomerID(id);
			_customer.setCompanyName(customer.getCompanyName());
			_customer.setContactName(customer.getContactName());
			_customer.setContactTitle(customer.getContactTitle());
			_customer.setAddress(customer.getAddress());
			_customer.setCity(customer.getCity());
			_customer.setRegion(customer.getRegion());
			_customer.setPostalCode(customer.getPostalCode());
			_customer.setCountry(customer.getCountry());
			_customer.setPhone(customer.getPhone());
			_customer.setFax(customer.getFax());
			return new ResponseEntity<>(customerRepository.save(_customer), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/Customers/{id}")
	public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable("id") String id) {
		try {
			customerRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
