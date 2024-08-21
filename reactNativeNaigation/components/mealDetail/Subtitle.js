const { View, Text, StyleSheet } = require("react-native");

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>

    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        margin: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    }
})