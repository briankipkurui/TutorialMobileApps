import { useContext, useEffect, useState } from "react";
import ExpenseOutput from "../components/expensesOutput/ExpenseOutPut";
import { ExpensesContext } from "../store/Expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from '../utils/http'
import LoadingOverLay from "../components/ui/LoadingOverLay";
import ErrorOverLay from "../components/ui/ErrorOverLay";

export function RecentExpenses() {
    const expenseCtx = useContext(ExpensesContext)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true)
            try {
                const expense = await fetchExpenses()
                expenseCtx.setExpenses(expense)
            } catch (error) {
                setError('Could not fetch expense!')
            }
            setIsFetching(false)


        }
        getExpenses()
    }, [])

    function errorHandler() {
        setError(null)
    }
    if (error && !isFetching) {
        return <ErrorOverLay message={error} onConfirm={errorHandler} />
    }

    if (isFetching) {
        return <LoadingOverLay />
    }

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date()
        const days7DaysAgo = getDateMinusDays(today, 7)
        return (expense.date >= days7DaysAgo) && (expense.date <= today)
    })


    return <ExpenseOutput expenses={recentExpenses} expensesperiod="last 7 days" />
}

export default RecentExpenses