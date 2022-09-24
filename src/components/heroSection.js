import React from 'react'
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const heroSection = () => {
    return (
        <View style={{padding:20}}>
            <ImageBackground source={require('../images/gero.png')} resizeMode="cover" style={styles.containerHero}>
                <Text style={{color:"white", textAlign:"center", fontSize:16, paddingHorizontal:10}}>Vous etes une organisation à but non lucratif, inscrivez vous ici ! </Text>
                <TouchableOpacity style={styles.call}>
                    <Text style={{color:"#0E4944", fontSize:12, fontWeight:"100"}}>
                        S'enregistrer
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHero : {
        justifyContent : "center",
        alignItems : "center",
        height : 150,
    },
    call :  {
        height : 40,
        paddingHorizontal : 15,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : "#9BD35A",
        marginTop : 10,
        borderRadius : 4
    }
})
export default heroSection
