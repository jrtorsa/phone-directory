import React from "react";

const TableRow = ({ addNewcontact, setAddNewContact }) => {
  const { name, phone, email, address } = addNewcontact;

  const handleContact = (e) => {
    setAddNewContact({
      ...addNewcontact,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
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
      <td>
        <button>Add &#43;</button>
      </td>
    </>
  );
};

export default TableRow;