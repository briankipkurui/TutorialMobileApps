import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/Expenses-context";
import ExpenseForm from "../components/manageExpense/ExpensesForm";

function ManageExpense({ route, navigation }) {
    const expenseCtx = useContext(ExpensesContext)
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


    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(editExpenseId)
        navigation.goBack()
    }
    function cancelHandler() {
        navigation.goBack()
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expenseCtx.updateExpense(editExpenseId, expenseData)
        } else {
            expenseCtx.addExpenses(expenseData)
           
        }

        navigation.goBack()
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