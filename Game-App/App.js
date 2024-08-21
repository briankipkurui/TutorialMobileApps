import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './contants/colors';
import GameIsOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'



export default function App() {
  const [useNumber, setUseNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)




  function pickedNumberHandler(pickedNumber) {
    setUseNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(pickeNumber) {
    setGameIsOver(true)
    setGuessRounds(pickeNumber)
  }

  function startnewGameHandler() {
    setUseNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />
  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && useNumber) {
    screen =
      <GameIsOverScreen
        userNumber={useNumber}
        roundNumber={guessRounds}
        onStartNewGame={startnewGameHandler}
      />
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView
          style={styles.rootScreen}
        >
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
})
