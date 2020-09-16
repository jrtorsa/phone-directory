import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const [addButton, setAddButton] = useState(true);

  const { id, name, phone, email, address } = addNewcontact;
  const [newRow, setNewRow] = useState([{ id, name, phone, email, address }]);

  const addNewRow = (e) => {
    e.preventDefault();
    setNewRow((addNewcontact) => [...addNewcontact, newRow]);
    setAddButton(false);
  };
  return (
    <div>
      <table>
        <TableHeader />
        <tbody></tbody>
        <tfoot>
          <TableRow
            addNewcontact={addNewcontact}
            setAddNewContact={setAddNewContact}
            addNewRow={addNewRow}
            addButton={addButton}
            newRow={newRow}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
