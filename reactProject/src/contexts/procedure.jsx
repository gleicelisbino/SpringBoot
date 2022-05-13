import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useOrders } from "../contexts/orders";

const ProcedureContext = createContext({});

export default function ProcedureProvider({ children }) {
  const [procedures, setProcedures] = useState([]);
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const { orderId } = useOrders();

  const getAllProcedures = async (orderId) => {
    const response = await axios.get(
      `http://localhost:8080/api/findWithCountryName/?Find=${orderId}`
    );
    setProcedures(response.data);
  };

  useEffect(() => {
    if (orderId !== undefined) {
      getAllProcedures();
    }
  }, []);

  return (
    <ProcedureContext.Provider
      value={{
        country,
        setCountry,
        companyName,
        setCompanyName,
        procedures,
        setProcedures,
        getAllProcedures,
      }}
    >
      {children}
    </ProcedureContext.Provider>
  );
}

export const useProcedures = () => useContext(ProcedureContext);
