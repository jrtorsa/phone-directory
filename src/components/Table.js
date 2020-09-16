import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import List from "./List";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const { name, phone, email, address } = addNewcontact;
  const [newRow, setNewRow] = useState([{ name, phone, email, address }]);

  const addNewRow = (e) => {
    e.preventDefault();
    setNewRow((newRow) => [...newRow, addNewcontact]);
  };
  return (
    <div>
      <table>
        <TableHeader />
        <tbody>
          <List name={name} phone={phone} email={email} address={address} />
        </tbody>
        <tfoot>
          <TableRow
            addNewcontact={addNewcontact}
            setAddNewContact={setAddNewContact}
            newRow={newRow}
            addNewRow={addNewRow}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
