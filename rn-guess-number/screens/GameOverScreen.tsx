import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Colors from '../constants/colors'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

export default function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
    return (
        <View style={clsx.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {roundsNumber}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title="NEW GAME" onPress={onRestart} />
        </View>
    )
}

const clsx = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
