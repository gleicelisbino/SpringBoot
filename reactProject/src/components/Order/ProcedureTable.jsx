import React from "react";
import ClayTable from "@clayui/table";

import { useProcedures } from "../../contexts/procedure";
export default function ProcedureTable() {
  const { procedures } = useProcedures();
  return (
    <ClayTable className="mt-6 px-6">
      <ClayTable.Head>
        <ClayTable.Row>
          <ClayTable.Cell headingCell>{"OrderID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"ProductID"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"UnitPrice"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Quantity"}</ClayTable.Cell>
          <ClayTable.Cell headingCell>{"Discount"}</ClayTable.Cell>
        </ClayTable.Row>
      </ClayTable.Head>
      <ClayTable.Body>
        {procedures.map((procedure, index) => {
          return (
            <ClayTable.Row key={index}>
              <ClayTable.Cell headingTitle>{procedure[0]}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{procedure[1]}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{procedure[2]}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{procedure[3]}</ClayTable.Cell>
              <ClayTable.Cell headingTitle>{procedure[4]}</ClayTable.Cell>
            </ClayTable.Row>
          );
        })}
      </ClayTable.Body>
    </ClayTable>
  );
}
