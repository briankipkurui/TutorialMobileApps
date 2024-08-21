import { View, Image, StyleSheet, Text } from "react-native"
import Tittle from "../components/ui/Tittle"
import Colors from "../contants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"
function GameIsOverScreen({ roundNumber, userNumber, onStartNewGame }) {
    return (

        <View style={styles.rootContainer}>
            <Tittle>GAME OVER!</Tittle>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed
                <Text style={styles.highlight}>{roundNumber}</Text>rounds to guess the number
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
        </View>

    )
}
export default GameIsOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageContainer: {
        width: 400,
        height: 400,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
})