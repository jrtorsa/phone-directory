import React from "react";
import Button from "./Buttons";

const TableRow = ({ addNewcontact, setAddNewContact, newRow, addNewRow }) => {
  const { name, phone, email, address } = addNewcontact;

  const handleContact = (e) => {
    setAddNewContact({
      ...addNewcontact,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <tr>
        <td>
          <input
            name="name"
            value={name}
            onChange={handleContact}
            placeholder="Name"
          />
        </td>
        <td>
          <input
            name="phone"
            value={phone}
            onChange={handleContact}
            placeholder="Phone"
          />
        </td>
        <td>
          <input
            name="email"
            value={email}
            onChange={handleContact}
            placeholder="Email"
          />
        </td>
        <td>
          <input
            name="address"
            value={address}
            onChange={handleContact}
            placeholder="Address"
          />
        </td>
        <Button addNewRow={addNewRow} />
      </tr>
    </>
  );
};

export default TableRow;
