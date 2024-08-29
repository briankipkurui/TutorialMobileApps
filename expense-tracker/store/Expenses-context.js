import { createContext, useReducer } from "react";



const DUMMY_EXPNSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'Another book',
        amount: 14.99,
        date: new Date('2022-02-18')
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2022-01-05')
    },
    {
        id: 'e7',
        description: 'some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e8',
        description: 'Another book',
        amount: 14.99,
        date: new Date('2022-02-18')
    }
]
export const ExpensesContext = createContext({
    expenses: [],
    addExpenses: ({ description, amount, date }) => { },
    setExpenses: (expense) => { },
    deleteExpense: (id) => { },
    updateExpense: (id) => { }
})
function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'SET':
            return action.payload
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}


function ExpensesContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expensesReducer, [])
    function addExpenses(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }

    function setExpenses(expense) {
        dispatch({ type: 'SET', payload: expense })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expenseState,
        setExpenses: setExpenses,
        addExpenses: addExpenses,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider