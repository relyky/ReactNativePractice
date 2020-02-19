import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  function configureNewGame() {
    setGuessRounds(0)
    setUserNumber(null)
  }

  function handleStartGame(selectedNumber) {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  function handleGameOver(numOfRounds) {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onRestart={configureNewGame}
    />
  }

  return (
    <View style={clsx.screen}>
      <Header title="猜一個數字" />
      {content}
    </View>
  );
}

const clsx = StyleSheet.create({
  screen: {
    flex: 1
  }
});
