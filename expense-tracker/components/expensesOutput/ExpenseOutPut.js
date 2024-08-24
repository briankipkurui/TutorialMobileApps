import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpenseList";
import { GlobalStyles } from "../../constants/styles";


function ExpenseOutput({ expenses, expensesperiod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesperiod} />
            <ExpensesList expenses={expenses} />
        </View>
    )
}

export default ExpenseOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})