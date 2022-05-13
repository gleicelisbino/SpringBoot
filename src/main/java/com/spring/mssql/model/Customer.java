package com.spring.mssql.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "Customers")

@NamedStoredProcedureQueries({
        @NamedStoredProcedureQuery(name = "findCompanyNameFromSameCountry", procedureName = "findCompanyNameFromSameCountry", parameters = {@StoredProcedureParameter(mode = ParameterMode.IN,name = "Find",type=String.class)} )})

public class Customer {


  @Column(name = "CustomerID",columnDefinition = "nchar", nullable=false, length=5)
  @Id
  private String CustomerID;

  @Column(name = "CompanyName",columnDefinition = "nvarchar", nullable=false, length=40)
  private String companyName;

  @Column(name = "ContactName",columnDefinition = "nvarchar", nullable=true, length=30)
  private String contactName;

  @Column(name = "ContactTitle",columnDefinition = "nvarchar", nullable=true, length=30)
  private String ContactTitle;

  @Column(name = "Address",columnDefinition = "nvarchar", nullable=true, length=60)
  private String Address;

  @Column(name = "City",columnDefinition = "nvarchar", nullable=true, length=15)
  private String City;

  @Column(name = "Region",columnDefinition = "nvarchar", nullable=true, length=15)
  private String Region;

  @Column(name = "PostalCode",columnDefinition = "nvarchar", nullable=true, length=10)
  private String postalCode;

  @Column(name = "Country",columnDefinition = "nvarchar", nullable=true, length=15)
  private String Country;

  @Column(name = "Phone",columnDefinition = "nvarchar", nullable=true, length=24)
  private String Phone;

  @Column(name = "Fax",columnDefinition = "nvarchar", nullable=true, length=24)
  private String Fax;

  public Customer() {

  }

  public Customer(String CustomerID, String CompanyName, String contactName, String ContactTitle, String Address, String City, String Region, String postalCode, String Country, String Phone, String Fax) {
    this.CustomerID = CustomerID;
    this.companyName = CompanyName;
    this.contactName = contactName;
    this.ContactTitle = ContactTitle;
    this.Address = Address;
    this.City = City;
    this.Region = Region;
    this.postalCode = postalCode;
    this.Country = Country;
    this.Phone = Phone;
    this.Fax = Fax;
  }

  public String getCustomerID() {
    return CustomerID;
  }

  public void setCustomerID(String CustomerID) {
    this.CustomerID = CustomerID;
  }

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String CompanyName) {
    this.companyName = CompanyName;
  }

  public String getContactName() {
    return contactName;
  }

  public void setContactName(String Contactname) {
    this.contactName = Contactname;
  }

  public String getContactTitle() {
    return ContactTitle;
  }

  public void setContactTitle(String Contacttitle) {
    this.ContactTitle = Contacttitle;
  }

  public String getAddress() {
    return Address;
  }

  public void setAddress(String Address) {
    this.Address = Address;
  }

  public String getCity() {
    return City;
  }

  public void setCity(String City) {
    this.City = City;
  }

  public String getRegion() {
    return Region;
  }

  public void setRegion(String Region) {
    this.Region = Region;
  }


  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public String getCountry() {
    return Country;
  }

  public void setCountry(String Country) {
    this.Country = Country;
  }

  public String getPhone() {
    return Phone;
  }

  public void setPhone(String Phone) {
    this.Phone = Phone;
  }

  public String getFax() {
    return Fax;
  }

  public void setFax(String Fax) {
    this.Fax = Fax;
  }

  @Override
  public String toString() {
    return ", desc=" + contactName + "]";
  }

}
