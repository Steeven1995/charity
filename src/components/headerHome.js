import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function headerHome() {
    return (
        <View style={styles.header}>
            <View>
                <Text>
                    Hello !
                </Text>
                <Text style={{fontSize:22}}>
                    Gabin
                </Text>
            </View>
            <TouchableOpacity style={styles.notification}>
                <Ionicons name='ios-notifications' size={22} color={"#0E4944"}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 70,
        flexDirection : "row",
        justifyContent:"space-between",
        paddingHorizontal : 20,
        alignItems:"center",
        paddingVertical : 5
    },
    notification : {
        height : 40,
        width : 40,
        borderRadius : 5,
        backgroundColor : "#F5F6F8",
        justifyContent :"center",
        alignItems : "center"
    }
})
