import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Colors from '../constants/colors'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

export default function StartGameScreen({ onStartGame }) {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    function handleNumberInput(inputText) {
        // 只能輸入數字
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    function handleReset() {
        setEnteredValue('')
        setConfirmed(false)
    }

    function handleConfirm() {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            console.log('Invalid chosenNumber')
            Alert.alert('請輸入數字', '數值需介於1至99。',
                [{ text: 'Okay', style: 'destructive', onPress: handleReset }])
            return
        }
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        setConfirmed(true)
        Keyboard.dismiss()
        console.log('chosenNumber', chosenNumber)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={clsx.screen}>
                <Text style={clsx.title}>開始新遊戲</Text>
                <Card style={clsx.inputContainer}>
                    <Text>選取數字</Text>
                    <Input
                        style={clsx.input}
                        blurOnSubmit={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={handleNumberInput}
                        value={enteredValue}
                    />
                    <View style={clsx.buttonContainer}>
                        <View style={clsx.button}>
                            <Button title="重置" onPress={handleReset} color={Colors.accent} />
                        </View>
                        <View style={clsx.button}>
                            <Button title="確認" onPress={handleConfirm} color={Colors.primary} />
                        </View>
                    </View>
                </Card>

                {confirmed &&
                    <Card style={clsx.summaryContainer}>
                        <Text>你選取了</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title="開始遊戲" onPress={() => onStartGame(selectedNumber)} />
                    </Card>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const clsx = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});
