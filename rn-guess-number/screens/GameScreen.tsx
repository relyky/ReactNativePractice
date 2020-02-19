import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export default function GameScreen({ userChoice, onGameOver }) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice])

    function handleNextGuess(direction) {
        if ((direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Don\'t lie', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
            return
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else if (direction === 'greater') {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(rounds => rounds + 1)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={clsx.screen}>
                <Text>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={clsx.buttonContainer}>
                    <Button title="LOWER" onPress={() => handleNextGuess('lower')} />
                    <Button title="GREATER" onPress={() => handleNextGuess('greater')} />
                </Card>
            </View>
        </TouchableWithoutFeedback >
    )
}

const clsx = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});
