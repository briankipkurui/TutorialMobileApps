import { useContext } from "react";
import ExpenseOutput from "../components/expensesOutput/ExpenseOutPut";
import { ExpensesContext } from "../store/Expenses-context";
import { getDateMinusDays } from "../utils/date";

export function RecentExpenses() {
    const expenseCtx = useContext(ExpensesContext)

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date()
        const days7DaysAgo = getDateMinusDays(today, 7)
        return (expense.date >= days7DaysAgo) && (expense.date <= today)
    })


    return <ExpenseOutput expenses={recentExpenses} expensesperiod="last 7 days" />
}

export default RecentExpenses