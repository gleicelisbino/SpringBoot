package com.spring.mssql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "Products")
public class Products implements Serializable {
    @Id

    @Column(name = "ProductID",columnDefinition = "int", nullable=false, length=4)
    private Integer productID;
    
    

    public Products(int productID) {
        this.productID = productID;
    }

    @Override
    public String toString() {
        return "Products{" +
                "productID=" + productID +

                '}';
    }

    public Products() {

    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

}
