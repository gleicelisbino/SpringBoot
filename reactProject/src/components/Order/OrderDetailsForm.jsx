import React from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { useOrders } from "../../contexts/orders";
import { useProcedures } from "../../contexts/procedure";

export default function OrderDetailsForm() {
  const { orderId, setOrderId } = useOrders();
  const { getAllProcedures } = useProcedures();

  return (
    <div className="sheet sheet-lg">
      <div className="sheet-header">
        <h2 className="sheet-title mt-4">Order Details Form</h2>
      </div>
      <ClayForm>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Order ID</label>
          <ClayInput
            maxLength={5}
            onChange={(e) => {
              setOrderId(e.target.value);
            }}
            value={orderId}
            placeholder="ID"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <h3 className="sheet-subtitle"></h3>
        <div>
          <div className="d-flex">
            <div className="d-flex w-100 justify-content-end">
              <ClayButton.Group spaced>
                <ClayButton
                  onClick={(e) => {
                    getAllProcedures(orderId);
                    e.preventDefault();
                  }}
                  type="button"
                >
                  GET
                </ClayButton>
              </ClayButton.Group>
            </div>
          </div>
        </div>
      </ClayForm>
    </div>
  );
}
