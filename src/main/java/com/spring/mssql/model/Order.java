package com.spring.mssql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "Orders")
public class Order {

    @Id

    @Column(name = "OrderID",columnDefinition = "int", nullable=false, length=5)
    private int orderID;

    @Column(name = "CustomerID",columnDefinition = "nchar", nullable=false)
    private String CustomerID;

    @Column(name = "EmployeeID",columnDefinition = "int", nullable=true)
    private int EmployeeID;

    @Column(name = "OrderDate",columnDefinition = "datetime", nullable=true)
    private String OrderDate;

    @Column(name = "RequiredDate",columnDefinition = "datetime", nullable=true)
    private String RequiredDate;

    @Column(name = "ShippedDate",columnDefinition = "datetime", nullable=true)
    private String ShippedDate;

    @Column(name = "ShipVia",columnDefinition = "money", nullable=true, length=0)
    private BigDecimal ShipVia;

    @Column(name = "Freight",columnDefinition = "money", nullable=true, length=0)
    private BigDecimal Freight;

    @Column(name = "ShipName",columnDefinition = "nvarchar", nullable=true, length=40)
    private String ShipName;

    @Column(name = "ShipAddress",columnDefinition = "nvarchar", nullable=true, length=60)
    private String ShipAddress;

    @Column(name = "ShipCity",columnDefinition = "nvarchar", nullable=true, length=15)
    private String ShipCity;

    @Column(name = "ShipRegion",columnDefinition = "nvarchar", nullable=true, length=15)
    private String ShipRegion;

    @Column(name = "ShipPostalCode",columnDefinition = "nvarchar", nullable=true, length=10)
    private String ShipPostalCode;

    @Column(name = "ShipCountry",columnDefinition = "nvarchar", nullable=true, length=15)
    private String ShipCountry;

    public Order() {

    }

    public Order(int OrderID, String CustomerID) {
        this.orderID = OrderID;
        this.CustomerID = CustomerID;
    }

    public int getEmployeeID() {
        return EmployeeID;
    }

    public void setEmployeeID(int employeeID) {
        EmployeeID = employeeID;
    }

    public String getOrderDate() {
        return OrderDate;
    }

    public void setOrderDate(String orderDate) {
        OrderDate = orderDate;
    }

    public String getRequiredDate() {
        return RequiredDate;
    }

    public void setRequiredDate(String requiredDate) {
        RequiredDate = requiredDate;
    }

    public String getShippedDate() {
        return ShippedDate;
    }

    public void setShippedDate(String shippedDate) {
        ShippedDate = shippedDate;
    }

    public BigDecimal getShipVia() {
        return ShipVia;
    }

    public void setShipVia(BigDecimal shipVia) {
        ShipVia = shipVia;
    }

    public BigDecimal getFreight() {
        return Freight;
    }

    public void setFreight(BigDecimal freight) {
        Freight = freight;
    }

    public String getShipName() {
        return ShipName;
    }

    public void setShipName(String shipName) {
        ShipName = shipName;
    }

    public String getShipAddress() {
        return ShipAddress;
    }

    public void setShipAddress(String shipAddress) {
        ShipAddress = shipAddress;
    }

    public String getShipCity() {
        return ShipCity;
    }

    public void setShipCity(String shipCity) {
        ShipCity = shipCity;
    }

    public String getShipRegion() {
        return ShipRegion;
    }

    public void setShipRegion(String shipRegion) {
        ShipRegion = shipRegion;
    }

    public String getShipPostalCode() {
        return ShipPostalCode;
    }

    public void setShipPostalCode(String shipPostalCode) {
        ShipPostalCode = shipPostalCode;
    }

    public String getShipCountry() {
        return ShipCountry;
    }

    public void setShipCountry(String shipCountry) {
        ShipCountry = shipCountry;
    }

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public Order(int orderID, String customerID, int employeeID, String orderDate, String requiredDate, String shippedDate, BigDecimal shipVia, BigDecimal freight, String shipName, String shipAddress, String shipCity, String shipRegion, String shipPostalCode, String shipCountry) {
        this.orderID = orderID;
        this.CustomerID = customerID;
        this.EmployeeID = employeeID;
        this.OrderDate = orderDate;
        this.RequiredDate = requiredDate;
        this.ShippedDate = shippedDate;
        this.ShipVia = shipVia;
        this.Freight = freight;
        this.ShipName = shipName;
        this.ShipAddress = shipAddress;
        this.ShipCity = shipCity;
        this.ShipRegion = shipRegion;
        this.ShipPostalCode = shipPostalCode;
        this.ShipCountry = shipCountry;
    }

    public String getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(String CustomerID) {
        this.CustomerID = CustomerID;
    }



    @Override
    public String toString() {
        return ", desc=" + orderID + "]";
    }

}
