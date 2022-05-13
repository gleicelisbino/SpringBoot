import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

const CustomerContext = createContext({});

export default function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [toBeDeleted, setToBeDeleted] = useState("");

  const getAllCustomers = async () => {
    const response = await axios.get("http://localhost:8080/api/Customers/");
    setCustomers(response.data);
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <CustomerContext.Provider
      value={{
        customerId,
        setCustomerId,
        companyName,
        setCompanyName,
        contactName,
        setContactName,
        contactTitle,
        setContactTitle,
        address,
        setAddress,
        city,
        setCity,
        region,
        setRegion,
        postalCode,
        setPostalCode,
        country,
        setCountry,
        phone,
        setPhone,
        fax,
        setFax,
        customers,
        setCustomers,
        getAllCustomers,
        toBeDeleted,
        setToBeDeleted,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomers = () => useContext(CustomerContext);
