import React from "react";

const Button = ({ addNewRow }) => {
  return (
    <td>
      <button type="submit" onClick={addNewRow}>
        Add &#43;
      </button>
    </td>
  );
};

export default Button;
