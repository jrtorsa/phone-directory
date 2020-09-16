import React from "react";

const Button = ({ addNewRow, addButton }) => {
  return (
    <>
      {addButton ? (
        <td>
          <button onClick={addNewRow}>Add &#43;</button>
        </td>
      ) : (
        <td>
          <button>Remove</button>
        </td>
      )}
    </>
  );
};

export default Button;
