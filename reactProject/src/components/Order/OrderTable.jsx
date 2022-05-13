import React from "react";
import ClayTable from "@clayui/table";
import { useOrders } from "../../contexts/orders";

export default function OrderTable() {
  const { orders } = useOrders();
  return (
    <ClayTable className="mt-6 px-6">
      <ClayTable.Head>
        <ClayTable.Row>
          <ClayTable.Cell headingCell>{"Order ID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Customer ID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Employee ID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Order Date"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Required Date"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Shipped Date"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipVia"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Freight"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Ship Name"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipAddress"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipCity"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipRegion"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipPostalCode"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ShipCountry"}</ClayTable.Cell>
        </ClayTable.Row>
      </ClayTable.Head>
      <ClayTable.Body>
        {orders.map((order, index) => {
          return (
            <ClayTable.Row key={index}>
              <ClayTable.Cell headingTitle>{order.orderID}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.customerID}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.employeeID}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.orderDate}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.requiredDate}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shippedDate}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipVia}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.freight}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipName}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipAddress}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipCity}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipRegion}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>
                {order.shipPostalCode}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>{order.shipCountry}</ClayTable.Cell>
            </ClayTable.Row>
          );
        })}
      </ClayTable.Body>
    </ClayTable>
  );
}
