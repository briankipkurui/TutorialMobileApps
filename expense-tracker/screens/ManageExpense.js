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
    function confirmHandler() {
        if (isEditing) {
            expenseCtx.updateExpense(
                editExpenseId,
                {
                    description: 'Test111',
                    amount: 39.99,
                    date: new Date('2024-08-23')
                }
            )
        } else {
            expenseCtx.addExpenses({
                description: 'Test',
                amount: 19.99,
                date: new Date('2024-08-23')
            })
        }
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <ExpenseForm/>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancle</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
        marginBottom:30
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})