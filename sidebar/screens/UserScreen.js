import { StyleSheet, Text, View } from "react-native";

function UserScreen() {
    return (
        <View>
            <Text>Hello this is me</Text>
        </View>
    )
}
export default UserScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlight: {
        fontWeight: 'bold',
        color: '#eh1864'
    }
})