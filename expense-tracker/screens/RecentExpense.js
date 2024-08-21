import ExpenseOutput from "../components/expensesOutput/ExpenseOutPut";

export function RecentExpenses() {
    return <ExpenseOutput expensesperiod="last 7 days" />
}

export default RecentExpenses