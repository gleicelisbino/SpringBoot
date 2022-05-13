package com.spring.mssql.model;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "\"Order Details\"")
@IdClass(CompositeIDS.class)

public class OrderDetails implements Serializable {

    @Id
    @Column(name = "OrderID",columnDefinition = "int", nullable=false, length=4)
    private int orderID;

    @Id
    @Column(name = "ProductID",columnDefinition = "int", nullable=false, length = 4)
    private int productID;

    @Column(name = "UnitPrice",columnDefinition = "money", nullable=false, length = 8)
    private BigDecimal unitPrice;

    @Column(name = "Discount",columnDefinition = "real", nullable=false, length = 4)
    private BigDecimal discount;


    @Column(name = "Quantity",columnDefinition = "smallint", nullable=false, length=2)
    private int quantity;

    public OrderDetails(int orderID, int productID, BigDecimal discount, BigDecimal unitPrice, int quantity) {
        this.orderID = orderID;
        this.productID = productID;
        this.discount = discount;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }

    public OrderDetails() {

    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    @Override
    public String toString() {
        return ", desc=" + orderID + "]";
    }

}
