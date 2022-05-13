import React from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { useProducts } from "../../contexts/products";

export default function ProductForm() {
  const {
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
    discount2,
    setDiscount2,
    unitPrice2,
    setUnitPrice2,
    quantity2,
    setQuantity2,
    postAllProducts,
  } = useProducts();

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
              setOrderID(e.target.value);
            }}
            value={orderID}
            placeholder="ID"
            type="text"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Product ID</label>
          <ClayInput
            maxLength={5}
            onChange={(e) => {
              setProductID(e.target.value);
            }}
            value={productID}
            placeholder="Product ID"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Discount</label>
          <ClayInput
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            value={discount}
            placeholder="Discount"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Unit Price</label>
          <ClayInput
            onChange={(e) => {
              setUnitPrice(e.target.value);
            }}
            value={unitPrice}
            placeholder="Unit Price"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Quantity</label>
          <ClayInput
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            value={quantity}
            placeholder="Quantity"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <h3 className="sheet-subtitle"></h3>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Order ID</label>
          <ClayInput
            maxLength={5}
            onChange={(e) => {
              setOrderID2(e.target.value);
            }}
            value={orderID2}
            placeholder="ID"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Product ID</label>
          <ClayInput
            maxLength={5}
            onChange={(e) => {
              setProductID2(e.target.value);
            }}
            value={productID2}
            placeholder="Product ID"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Discount</label>
          <ClayInput
            onChange={(e) => {
              setDiscount2(e.target.value);
            }}
            value={discount2}
            placeholder="Discount"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Unit Price</label>
          <ClayInput
            onChange={(e) => {
              setUnitPrice2(e.target.value);
            }}
            value={unitPrice2}
            placeholder="Unit Price"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Quantity</label>
          <ClayInput
            onChange={(e) => {
              setQuantity2(e.target.value);
            }}
            value={quantity2}
            placeholder="Quantity"
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
                    postAllProducts();
                    e.preventDefault();
                  }}
                  type="button"
                >
                  POST
                </ClayButton>
              </ClayButton.Group>
            </div>
          </div>
        </div>
      </ClayForm>
    </div>
  );
}
