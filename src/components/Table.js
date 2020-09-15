import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState([
    {
      name: null,
      phone: null,
      email: null,
      address: null
    }
  ]);

  const addNewRow = (newContact) => {
    setAddNewContact((addNewcontact) => [...addNewcontact, newContact]);
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
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
