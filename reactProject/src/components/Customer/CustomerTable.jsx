import React from "react";
import ClayTable from "@clayui/table";
import { useCustomers } from "../../contexts/customers";

export default function CustomerTable() {
  const { customers } = useCustomers();
  return (
    <ClayTable className="mt-6 px-6">
      <ClayTable.Head>
        <ClayTable.Row>
          <ClayTable.Cell headingCell>{"Customer ID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Company Name"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Contact Name"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Contact Title"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Address"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"City"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Region"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Postal Code"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Country"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Phone"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Fax"}</ClayTable.Cell>
        </ClayTable.Row>
      </ClayTable.Head>
      <ClayTable.Body>
        {customers.map((customer, index) => {
          return (
            <ClayTable.Row key={index}>
              <ClayTable.Cell headingTitle>
                {customer.customerID}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>
                {customer.companyName}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>
                {customer.contactName}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>
                {customer.contactTitle}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.address}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.city}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.region}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>
                {customer.postalCode}
              </ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.country}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.phone}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{customer.fax}</ClayTable.Cell>
            </ClayTable.Row>
          );
        })}
      </ClayTable.Body>
    </ClayTable>
  );
}
