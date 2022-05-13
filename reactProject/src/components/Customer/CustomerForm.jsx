import React from "react";
import ClayForm, { ClayInput } from "@clayui/form";
import ClayButton from "@clayui/button";
import { useCustomers } from "../../contexts/customers";
import { addCustomer, deleteCustomer } from "../../services/customer";
import { updateCustomer } from "../../services/customer";

export default function CustomerForm() {
  const {
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
    toBeDeleted,
    setToBeDeleted,
  } = useCustomers();

  return (
    <div className="sheet sheet-lg">
      <div className="sheet-header">
        <h2 className="sheet-title mt-4">Customers Form</h2>
      </div>
      <ClayForm>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Customer ID</label>
          <ClayInput
            maxLength={5}
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
            value={customerId}
            placeholder="ID"
            type="text"
          ></ClayInput>
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Company Name</label>
          <ClayInput
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            placeholder="Company Name"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Contact Name</label>
          <ClayInput
            onChange={(e) => setContactName(e.target.value)}
            value={contactName}
            placeholder="Contact Name"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Contact Title</label>
          <ClayInput
            onChange={(e) => setContactTitle(e.target.value)}
            value={contactTitle}
            placeholder="Contact Title"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Address</label>
          <ClayInput
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">City</label>
          <ClayInput
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Region</label>
          <ClayInput
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            placeholder="Region"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Postal Code</label>
          <ClayInput
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            placeholder="Postal Code"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Country</label>
          <ClayInput
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            placeholder="Country"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Phone</label>
          <ClayInput
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Phone"
          />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">Fax</label>
          <ClayInput
            onChange={(e) => setFax(e.target.value)}
            value={fax}
            placeholder="Fax"
          />
        </ClayForm.Group>
        <h3 className="sheet-subtitle"></h3>
        <div>
          <div className="d-flex">
            <div className="form-group">
              <label className="form-label">Delete by ID</label>
              <div className="d-flex">
                <input
                  maxLength={5}
                  className="w-auto form-control mr-3"
                  onChange={(e) => setToBeDeleted(e.target.value)}
                />
                <ClayButton
                  displayType="danger"
                  onClick={() => deleteCustomer(toBeDeleted)}
                >
                  Delete
                </ClayButton>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-end">
              <ClayButton.Group spaced>
                <ClayButton
                  onClick={() => {
                    addCustomer(
                      customerId,
                      companyName,
                      contactName,
                      contactTitle,
                      address,
                      city,
                      region,
                      postalCode,
                      country,
                      phone,
                      fax
                    );
                  }}
                  type="submit"
                >
                  Submit
                </ClayButton>
                <ClayButton
                  onClick={(e) => {
                    updateCustomer(
                      customerId,
                      companyName,
                      contactName,
                      contactTitle,
                      address,
                      city,
                      region,
                      postalCode,
                      country,
                      phone,
                      fax
                    );
                    e.preventDefault();
                  }}
                  type="submit"
                >
                  Update
                </ClayButton>
              </ClayButton.Group>
            </div>
          </div>
        </div>
      </ClayForm>
    </div>
  );
}
