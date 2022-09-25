import React from 'react'
import { StyleSheet, ImageBackground, View, TouchableOpacity,Text, Image, Modal, TextInput} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const DetailScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"white", borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <ImageBackground source={require('../images/cause-3.jpg')} resizeMode="cover" imageStyle={{borderBottomLeftRadius:20, borderBottomRightRadius:20}} style={{height:300}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", padding:10}}>
                        <TouchableOpacity style={styles.share} onPress={()=>navigation.goBack()}>
                            <MaterialIcons name='keyboard-backspace' size={20} color={"#0E4944"}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.share}>
                            <AntDesign name='sharealt' size={20} color={"#0E4944"}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                
                <TouchableOpacity style={{padding:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image
                            source={require('../images/icon.png')}
                            style={{height: 50, width:50, borderRadius:25}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:12, color:"black"}}>Par : Soutien.ga</Text>
                            <Text style={{fontSize:12, color:"gray"}}>Publié le :  27 juillet 2021</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={20} color={"#000"}/>
                    </TouchableOpacity>
                </TouchableOpacity>
                <Text style={{fontSize:22, width:"90%", paddingHorizontal:10, color:"#3B3B3B"}}>
                    Aidez des ophelins à obtenir une meilleure éducation
                </Text>
                <View style={{padding:10, marginTop:10}}>
                    <View style={{height:8, width:"100%", backgroundColor:"#F4F4F6", borderRadius:20}}>
                        <View style={{height:8, borderRadius:20, backgroundColor:"#9BD35A", width:"80%"}}></View>   
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row", paddingVertical:10, justifyContent:"space-between"}}>
                            <Text style={{fontSize:12, color:"gray"}}>Objectif : </Text>
                            <Text style={{fontWeight:"bold"}}>XAF 500.000</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize:12, color:"gray"}}>Restant : </Text>
                            <Text style={{fontWeight:"bold"}}>XAF 100.000</Text>
                        </View>
                    </View>
                </View>
                <Text style={{padding:10, fontSize:14, lineHeight:20, textAlign:"justify"}}>
                    Rendre l'apprentissage possible pour les étudiants de tous âges, de la maternelle aux études supérieures. Ils fournissent également d'autres services et opportunités éducatifs qui contribuent à rendre les écoles plus efficaces et plus accessibles aux étudiants de tous horizons.
                </Text>

                <View style={{height:40,justifyContent:"center", alignItems:"center", backgroundColor:"#093E3A", borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                    <Text style={{fontSize:12, color:"white", fontWeight:"bold"}}>Il reste : 5 Jours - 5 heures - 35 minutes - 10 secondes</Text>
                </View>
            </View>

            <View style={{height:"10%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", paddingLeft:20}}>
                    <Image source={require("../images/about-1-1.jpg")} style={{height:40, width:40, borderRadius:20, position:"absolute", borderWidth:1, borderColor:"white"}}/>
                    <Image source={require("../images/about-1-1.jpg")} style={{height:40, width:40, borderRadius:20, position:"absolute", left:20, borderWidth:1, borderColor:"white"}}/>
                    <Image source={require("../images/about-1-1.jpg")} style={{height:40, width:40, borderRadius:20, position:"absolute", left:40, borderWidth:1, borderColor:"white"}}/>
                    <View style={{height:40, width:40, borderRadius:20, position:"absolute", borderWidth:1, borderColor:"white", left:60, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontSize:10}}>+299</Text>
                    </View> 
                </View>
                <TouchableOpacity  onPress={() => setModalVisible(true)} style={styles.call}>
                    <Text style={{color:"#0E4944", fontSize:12, fontWeight:"100"}}>
                        Faire un don
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{marginTop:10}}>
                            Veuillez entrez un montant en FCFA
                        </Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputForm}
                                keyboardType='numeric'
                                value='500'
                            />
                            <Text>
                                FCFA
                            </Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputFormMobileMoney}
                                keyboardType='numeric'
                                placeholder='Numero mobile money'
                            />
                            <View style={{flexDirection:"row"}}>
                                <Image source={require('../images/airtel.png')} style={{width:30, height:30, marginRight:5}}/>
                                <Image source={require('../images/moov.png')} style={{width:30, height:30, marginRight:5}}/>
                            </View>
                        </View>
                       
                        <View style={{width:"80%", justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                            <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
                                <MaterialIcons name='close' size={20} color={"white"}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => setModalVisible(true)} style={styles.valider}>
                                <Text style={{color:"#0E4944", fontSize:15, fontWeight:"bold"}}>
                                    VALIDER LE DON
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </Modal>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'space-between',
        backgroundColor : "#0E4944"
    },
    share : {
        height : 40,
        width : 40,
        borderRadius : 5,
        backgroundColor : "#F5F6F8",
        justifyContent :"center",
        alignItems : "center"
      },
      call :  {
        height : 50,
        paddingHorizontal : 40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : "#9BD35A",
        marginBottom : 10,
        borderRadius : 4
    },
    input : {
        width:'80%',
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
      fontSize : 22,
      width : "90%"
    },
    inputFormMobileMoney:{
        height: 56,
        borderWidth: 0,
        padding: 10,
        fontSize : 16,
        width : "80%"
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor : "rgba(12,10,10,0.8)",
      },
      modalView: {
        backgroundColor: "white",
        height : 300,
        width : "100%",
        alignItems: "center",
        borderTopRightRadius:20,
        borderTopLeftRadius : 20    
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      valider : {

        height : 50,
        width : "80%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : "#9BD35A",
        marginTop : 20,
        borderRadius : 4

      },
      close : {
        height : 50,
        width : 50,
        borderRadius : 10,
        backgroundColor : "#093E3A",
        marginTop : 20,
        justifyContent:"center",
        alignItems : "center"
      }
})
