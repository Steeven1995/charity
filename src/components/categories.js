import React from 'react'
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'

const Categories = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row"}}>
            <TouchableWithoutFeedback>
                <View  style={{marginTop :0,height:31, backgroundColor: "#4C9BBC", justifyContent:"center", alignItems:"center", paddingHorizontal:10, marginLeft: 10, borderRadius:5}}>
                    <Text style={{color : "#0582B7", textAlign:"center"}}>EDUCATION</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View  style={{marginTop :0,height:31, backgroundColor: "#4C9BBC", justifyContent:"center", alignItems:"center", paddingHorizontal:10, marginLeft: 10, borderRadius:5}}>
                    <Text style={{color : "#0582B7", textAlign:"center"}}>SANTE</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View  style={{marginTop :0,height:31, backgroundColor: "#4C9BBC", justifyContent:"center", alignItems:"center", paddingHorizontal:10, marginLeft: 10, borderRadius:5}}>
                    <Text style={{color : "#0582B7", textAlign:"center"}}>ENVIRONNEMENT</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View  style={{marginTop :0,height:31, backgroundColor: "#4C9BBC", justifyContent:"center", alignItems:"center", paddingHorizontal:10, marginLeft: 10, borderRadius:5}}>
                    <Text style={{color : "#0582B7", textAlign:"center"}}>FAMINE</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View  style={{marginTop :0,height:31, backgroundColor: "#4C9BBC", justifyContent:"center", alignItems:"center", paddingHorizontal:10, marginLeft: 10, borderRadius:5}}>
                    <Text style={{color : "#0582B7", textAlign:"center"}}>ORPHELINA</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default Categories
