import { useContext } from "react";
import ExpenseOutput from "../components/expensesOutput/ExpenseOutPut";
import { ExpensesContext } from "../store/Expenses-context";

function AllExpenses() {
    const expenseCtx = useContext(ExpensesContext)
    return <ExpenseOutput expenses={expenseCtx.expenses} expensesperiod="total" />
}
export default AllExpenses