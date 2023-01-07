import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./components/Utils/DummyExpenses";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
