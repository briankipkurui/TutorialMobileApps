import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/Expenses-context";
import ExpenseForm from "../components/manageExpense/ExpensesForm";
import { storeExpense, updateExpense, deleteExpense } from '../utils/http'
import LoadingOverLay from "../components/ui/LoadingOverLay";
import ErrorOverLay from "../components/ui/ErrorOverLay";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

function ManageExpense({ route, navigation }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const expenseCtx = useContext(ExpensesContext)
    const [error, setError] = useState()
    const editExpenseId = route.params?.expenseId
    const isEditing = !!editExpenseId

    const selectedExpense = expenseCtx.expenses.find(
        (expense) => expense.id === editExpenseId
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit  Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])


    async function deleteExpenseHandler() {
        setIsSubmitting(true)
        try {
            await deleteExpense(editExpenseId)
            expenseCtx.deleteExpense(editExpenseId)
            navigation.goBack()
        } catch (error) {
            setError('Could not delete Expense try again later')
            setIsSubmitting(false)
        }


    }
    function cancelHandler() {
        navigation.goBack()
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true)
        try {
            if (isEditing) {
                expenseCtx.updateExpense(editExpenseId, expenseData)
                await updateExpense(editExpenseId, expenseData)
            } else {
                const id = await storeExpense(expenseData)
                expenseCtx.addExpenses({ ...expenseData, id: id })

            }
            navigation.goBack()
        } catch (error) {
            setError('Could not save data -please try again later')
            setIsSubmitting(false)
        }
    }
    function errorHandler() {
        setError(null)
    }

    if (error && !isSubmitting) {
        return <ErrorOverLay message={error} onConfirm={errorHandler} />
    }

    if (isSubmitting) {
        return <LoadingOverLay />
    }
    return (
        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    )
}
export default ManageExpense

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})