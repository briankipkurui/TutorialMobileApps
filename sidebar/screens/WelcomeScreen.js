import { StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}>"Welcome"</Text> ScreenF
            </Text>
        </View>
    )
}
export default WelcomeScreen

const styles = StyleSheet.create({
    rootContainer: {

    },
    highlight: {

    }
})