import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState({
    name: null,
    phone: null,
    email: null,
    address: null
  });

  const [newRow, setNewRow] = useState([addNewcontact]);
  const [addButton, setAddButton] = useState(true);

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
