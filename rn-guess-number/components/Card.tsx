import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Card({ children, style }) {
    return (
        <View style={{...clsx.card, ...style}}>           
            {children}
        </View>
    )
}

const clsx = StyleSheet.create({
    card: {
        shadowColor: 'red', /* iOS shadow */
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation:8, /* Android shadow */
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10
    }
})