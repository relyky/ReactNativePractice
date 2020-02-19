import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input(props) {
    const { style } = props
    return (
        <TextInput {...props} style={{ ...clsx.input, ...style }} />
    )
}

const clsx = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})
