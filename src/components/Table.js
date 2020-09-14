import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const [addRow, setAddRow] = useState([]);

  const addNewRow = () => {
    return;
  };

  return (
    <div>
      <table>
        <TableHeader />
        <tbody></tbody>
        <tfoot>
          <tr>
            <TableRow
              addNewcontact={addNewcontact}
              setAddNewContact={setAddNewContact}
            />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
