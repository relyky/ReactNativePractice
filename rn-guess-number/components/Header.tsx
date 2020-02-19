import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors'

export default function Header({ title }) {
    return (
        <View style={clsx.header}>
            <Text style={clsx.headerTitle}>{title}</Text>
        </View>
    )
}

const clsx = StyleSheet.create({
    header: {
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor: Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle: {
        color:'black',
        fontSize:18
    }
})
