import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, FlatList, } from 'react-native'
import Tittle from '../components/ui/Tittle'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/IntructionText';
import { AntDesign } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)

    } else {
        return rndNum
    }
}
let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([])


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(
                "Dont lie! ",
                "you know this is wrong..",
                [{ text: 'sorry!', style: 'cancel' }]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(preGuessRounds => [newRndNumber, ...preGuessRounds])
    }

    const guessRoundsListItem = guessRounds.length
    return (
        <View style={styles.screen}>
            <Tittle>Opponent's Guess</Tittle>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or Lower</InstructionText>
                <View>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <AntDesign name="plus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListItem - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />

            </View>
        </View>

    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    },
    InstructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 5
    }
})