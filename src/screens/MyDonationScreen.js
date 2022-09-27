import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const {width, height} = Dimensions.get('window');


const data = [
    {
        id :1,
        organisation : "Side Hat Organization",
        title : "Finding Help to Take Their Next Steps",
        montant : "10.000",
        date : "12-07-2022 à 8:20"
    }
]

const MyDonationScreen = ({navigation}) => {

    const [donation, setDonation] = React.useState(true)

    return (
        <View style={{flex: 1, backgroundColor:"#0E4944"}}>
            <View style={{flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor : "white", width:"100%", paddingHorizontal:20}}>
                <View style={{paddingTop:20}}>
                    <Text style={{fontSize:20}}>Activités</Text>
                    <Text style={{fontSize:12, marginTop:10, color:"#3B3B3B"}}>
                        Listes de mes actions
                    </Text>
                </View>
                {
                    donation ? (
                        <View>
                            <View style={{width:"100%", backgroundColor:"#CFDBDA", height:60, borderRadius:10, marginTop:20, flexDirection:"row", justifyContent:"space-between"}}>
                                <View style={{width:"50%", backgroundColor:"#0E4944", height:60, borderRadius : 10, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Mes dons</Text>
                                </View>
                                <TouchableOpacity onPress={()=>setDonation(false)} style={{width:"50%", height:60, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Mes compagnes</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                            <FlatList
                                data={data}
                                keyExtractor={(_, index)=>index.toString()}
                                renderItem = {({item})=>{
                                    return (
                                        <TouchableOpacity style={{justifyContent:"space-between", flexDirection:"row", alignItems:"center", borderBottomColor:"#C9C9C9", borderBottomWidth:1, marginTop:10, paddingBottom:10}} onPress={()=>navigation.navigate("Details")}>
                                            <View style={{padding:10, width:"70%"}}>
                                                <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>Soutien.ga</Text>
                                                <Text style={{fontSize:12, color:"gray"}}>Aidez notre ami à obtenir une meilleure éducation</Text>
                                                <Text style={{fontSize:12, color:"gray", marginTop:5}}>Fait le 20-12-2022 à 8:30</Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:14, fontWeight:"bold"}}>150.000 XFA</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                />
                                    
                            </View>
                        </View>
                    ) : (
                        <View>

                            <View style={{width:"100%", backgroundColor:"#CFDBDA", height:60, borderRadius:10, marginTop:20, flexDirection:"row", justifyContent:"space-between"}}> 
                                <TouchableOpacity onPress={()=>setDonation(true)} style={{width:"50%", height:60, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Mes dons</Text>
                                </TouchableOpacity>
                                <View style={{width:"50%", backgroundColor:"#0E4944", height:60, borderRadius : 10, justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Mes compagnes</Text>
                                </View>
                            </View>
                            <FlatList
                                data={data}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(_, index)=>index.toString()}
                                renderItem = {({item})=>{
                                    return (
                                    <View style={styles.shadow}>
                                        <ImageBackground source={require('../images/cause-3.jpg')} resizeMode="cover" imageStyle={{borderRadius:10}} style={{height:200, justifyContent:"space-between", alignItems:"flex-end", flexDirection:"row", padding:10}}>
                                            <View style={{flexDirection:"row",paddingVertical:5}}>
                                                <Text style={{fontSize:10, paddingVertical:5, paddingHorizontal:10,backgroundColor:"#F5F6F8", borderRadius:5, marginLeft:10}}>Education</Text>
                                                <Text style={{fontSize:10, paddingVertical:5, paddingHorizontal:10, backgroundColor:"#F5F6F8", borderRadius:5, marginLeft:10}}>Santé</Text>
                                            </View>
                                            <TouchableOpacity style={styles.share}>
                                                <AntDesign name='sharealt' size={20} color={"#0E4944"}/>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        
                                        <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
                                            <View style={{paddingHorizontal:10}}>
                                                <Text style={{fontSize:14, fontWeight:"bold", marginTop:10}}>
                                                    Aidez notre ami à obtenir une meilleure éducation
                                                </Text>
                                            </View>
                                            <View style={{padding:10}}>
                                                <View style={{height:8, width:"100%", backgroundColor:"#F4F4F6", borderRadius:20}}>
                                                    <View style={{height:8, borderRadius:20, backgroundColor:"#9BD35A", width:"80%"}}></View>   
                                                </View>
                                                <View style={{flexDirection:"row", paddingVertical:10, justifyContent:"space-between"}}>
                                                    <Text style={{fontSize:12, color:"gray"}}>Objectif : </Text>
                                                    <Text>XAF 500.000  {"(80%)"}</Text>
                                                </View>
                                                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                                    <Text style={{fontSize:12, color:"gray"}}>Restant : </Text>
                                                    <Text>XAF 100.000  {"(20%)"}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    )
                                }}
                            />
                        </View>

                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow : {
      borderRadius : 10,
      width : width-100,
      borderColor : '#FBFBFC',
      borderWidth : 1,
      marginLeft : 20,
      marginTop : 20
    },
    share : {
      height : 40,
      width : 40,
      borderRadius : 5,
      backgroundColor : "#F5F6F8",
      justifyContent :"center",
      alignItems : "center"
    }
  })

export default MyDonationScreen
