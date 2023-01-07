import React from "react";
import "../NewExpense/ExpenseForm.css";

export const Button = (props) => {
  return (
    <div className="new-expense__actions">
      <button type="button" onClick={props.onClick}>
        Cancel
      </button>
      <button type="submit">Add Expense</button>
    </div>
  );
};
