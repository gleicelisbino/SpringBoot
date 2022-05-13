import ClayTabs from "@clayui/tabs";
import React, { useState } from "react";
import CustomerForm from "./components/Customer/CustomerForm";
import CustomerTable from "./components/Customer/CustomerTable";
import OrderTable from "./components/Order/OrderTable";
import ProcedureTable from "./components/Order/ProcedureTable";
import OrderDetailsForm from "./components/Order/OrderDetailsForm";
import ProductForm from "./components/Product/ProductForm";

export default function App() {
  const [activeTabKeyValue, setActiveTabKeyValue] = useState(0);
  return (
    <main>
      <ClayTabs modern justified>
        <ClayTabs.Item
          active={activeTabKeyValue === 0}
          innerProps={{
            "aria-controls": "tabpanel-1",
          }}
          onClick={() => setActiveTabKeyValue(0)}
        >
          {"Customers Form"}
        </ClayTabs.Item>
        <ClayTabs.Item
          active={activeTabKeyValue === 1}
          innerProps={{
            "aria-controls": "tabpanel-2",
          }}
          onClick={() => setActiveTabKeyValue(1)}
        >
          {"Orders"}
        </ClayTabs.Item>
        <ClayTabs.Item
          active={activeTabKeyValue === 2}
          innerProps={{
            "aria-controls": "tabpanel-3",
          }}
          onClick={() => setActiveTabKeyValue(2)}
        >
          {"Procedure"}
        </ClayTabs.Item>
        <ClayTabs.Item
          active={activeTabKeyValue === 3}
          innerProps={{
            "aria-controls": "tabpanel-4",
          }}
          onClick={() => setActiveTabKeyValue(3)}
        >
          {"Post Products"}
        </ClayTabs.Item>
      </ClayTabs>
      <ClayTabs.Content activeIndex={activeTabKeyValue} fade>
        <ClayTabs.TabPane aria-labelledby="tab-1">
          <CustomerForm />
          <CustomerTable />
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-2">
          <OrderTable />
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-3">
          <OrderDetailsForm />
          <ProcedureTable />
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-4">
          <ProductForm />
        </ClayTabs.TabPane>
      </ClayTabs.Content>
    </main>
  );
}
