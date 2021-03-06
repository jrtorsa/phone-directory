import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import List from "./List";

const Table = () => {
  const [addNewcontact, setAddNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const [newRow, setNewRow] = useState([]);

  const addNewRow = (e) => {
    e.preventDefault();
    setNewRow(() => [...newRow, addNewcontact]);
    setAddNewContact({ name: "", phone: "", email: "", address: "" });
  };

  const deleteRow = (e) => {
    const { id } = e.target.parentElement;
    newRow.splice(id, 1);
    setNewRow([...newRow]);
  };

  return (
    <div>
      <table>
        <TableHeader />
        <tbody>
          {newRow.map((addNewcontact, i) => (
            <List addNewcontact={addNewcontact} key={i} deleteRow={deleteRow} />
          ))}
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
