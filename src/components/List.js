import React from "react";
const List = ({ addNewcontact, deleteRow }) => {
  const { name, phone, email, address } = addNewcontact;

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>
        <button onClick={deleteRow}>Delete</button>
      </td>
    </tr>
  );
};

export default List;
