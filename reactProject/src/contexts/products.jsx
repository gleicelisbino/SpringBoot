import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

const ProductContext = createContext({});

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [orderID, setOrderID] = useState("");
  const [productID, setProductID] = useState("");
  const [discount, setDiscount] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderID2, setOrderID2] = useState("");
  const [productID2, setProductID2] = useState("");
  const [discount2, setDiscount2] = useState("");
  const [unitPrice2, setUnitPrice2] = useState("");
  const [quantity2, setQuantity2] = useState("");

  const json = {
    orderID: orderID2,
    productID: productID2,
    discount: discount2,
    unitPrice: unitPrice2,
    quantity: quantity2,
  };
  const postAllProducts = async () => {
    console.log([{ orderID, productID, discount, unitPrice, quantity }, json]);
    const response = await axios.post(`http://localhost:8080/api/Products/`, [
      { orderID, productID, discount, unitPrice, quantity },
      json,
    ]);
  };

  return (
    <ProductContext.Provider
      value={{
        orderID,
        setOrderID,
        productID,
        setProductID,
        discount,
        setDiscount,
        unitPrice,
        setUnitPrice,
        quantity,
        setQuantity,
        orderID2,
        setOrderID2,
        productID2,
        setProductID2,
        productID2,
        discount2,
        setDiscount2,
        unitPrice2,
        setUnitPrice2,
        quantity2,
        setQuantity2,
        products,
        setProducts,
        postAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
