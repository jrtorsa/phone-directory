import React from "react";
const List = ({ name, phone, email, address }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default List;
