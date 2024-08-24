import { StyleSheet, View } from "react-native"
import Input from "./Input"


function ExpenseForm() {

    function amountChangeHandler() {

    }
    return (

        <View>
            <View style={styles.inputRow}>
                <Input
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangeHandler
                    }}
                />
                <Input
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYY-MM-DD',
                        maxLength: 10,
                        onChangeText: () => { }
                    }}
                />
            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true
                }}
            />

        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

