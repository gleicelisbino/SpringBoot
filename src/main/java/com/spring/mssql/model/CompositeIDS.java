package com.spring.mssql.model;

import java.io.Serializable;

public class CompositeIDS implements Serializable {
    private int orderID;

    private int  productID;

    public CompositeIDS() {
    }

    public CompositeIDS(int orderID, int productID) {
        this.orderID = orderID;
        this.productID = productID;
    }

}