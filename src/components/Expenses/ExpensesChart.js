import React from "react";
import { Chart } from "../Chart/Chart";
import { chartDataPoints } from "../Utils/chartDataPoints";

export const ExpensesChart = (props) => {
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
