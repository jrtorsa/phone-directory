import React from "react";

const Button = ({ addNewRow }) => {
  return (
    <td>
      <button onClick={addNewRow}>Add &#43;</button>
    </td>
  );
};

export default Button;
