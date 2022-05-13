import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

const OrderContext = createContext({});

export default function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [customerId, setCustomer] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [requiredDate, setRequiredDate] = useState("");
  const [shippedDate, setShippedDate] = useState("");
  const [shipVia, setShipVia] = useState("");
  const [freight, setFreight] = useState("");
  const [shipName, setShipName] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [shipCity, setShipCity] = useState("");
  const [shipRegion, setShipRegion] = useState("");
  const [shipPostalCode, setShipPostalCode] = useState("");
  const [shipCountry, setShipCountry] = useState("");

  const getAllOrders = async () => {
    const response = await axios.get("http://localhost:8080/api/Orders/");
    setOrders(response.data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orderId,
        setOrderId,
        employeeID,
        setEmployeeID,
        customerId,
        setCustomer,
        orderDate,
        setOrderDate,
        requiredDate,
        setRequiredDate,
        shippedDate,
        setShippedDate,
        shipVia,
        setShipVia,
        freight,
        setFreight,
        shipName,
        setShipName,
        shipAddress,
        setShipAddress,
        shipCity,
        setShipCity,
        shipRegion,
        setShipRegion,
        shipPostalCode,
        setShipPostalCode,
        shipCountry,
        setShipCountry,
        orders,
        setOrders,
        getAllOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);
