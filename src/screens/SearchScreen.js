import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import CategorieList from "../components/categoriesList"

const SearchScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#0E4944"}}>
            <View style={{flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor : "white", width:"100%", padding:20}}>
                <Text style={{fontSize:20}}>Explore</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputForm}
                        placeholder='Faire un don pour ...'
                    />
                    <TouchableOpacity style={styles.btnSearch}>
                            <EvilIcons name='search' size={22} color="white"/>
                    </TouchableOpacity>
                </View>
                <CategorieList/>
                <Text style={{marginTop:20}}>
                     Affichage du résultat de recherche « Enfants »
                </Text>

                <View>
                    <TouchableOpacity style={{flexDirection:"row", marginTop:20, backgroundColor:"#F5F6F8", padding:10, borderRadius:5}}>
                        <Image source={require('../images/cause-3.jpg')} style={{height:102, width:102, borderRadius:5}}/>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:12, fontWeight:"bold"}}>Réalisez le rêve des enfants</Text>
                            <Text style={{fontSize:12, color:"#A8A8A8"}}>Organisation du chapeau latéral</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
                                <Text style={{fontSize:10, color:"#A8A8A8"}}>10 jours restants</Text>
                                <Text>XAF 500.000</Text>
                            </View>
                            <View style={{height:10, width:"100%", backgroundColor:"#979797", borderRadius:20, marginTop:10}}>
                                <View style={{height:10, borderRadius:20, backgroundColor:"#9BD35A", width:"80%"}}></View>   
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        width:'100%',
        height:56,
        backgroundColor:"#F5F6F8",
        borderRadius :10,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent : "space-between",
        paddingRight : 20
    },
    inputForm : {
      height: 56,
      borderWidth: 0,
      padding: 10,
      fontSize : 12,
      width : "90%"
    },
    btnSearch : {
        height : 40,
        width : 40,
        borderRadius : 5,
        backgroundColor : "#0E4944",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default SearchScreen
