package com.spring.mssql.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    @PersistenceContext
    private EntityManager em;

    public List getOrdersDetailsSameOrder(String title) {
        return em.createNamedStoredProcedureQuery("findCompanyNameFromSameCountry").setParameter("Find",title).getResultList();
    }

}