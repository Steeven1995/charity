import React from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback, Dimensions, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"

import HeaderHome from "../components/headerHome";
import HeroSection from '../components/heroSection';
const {width, height} = Dimensions.get('window');

const data = [
  "evenement 1",
  "evenement 2",
  "evenement 3",
  "evenement 4",
]


const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#0E4944"}}>
        <View style={{flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor : "white", width:"100%"}}>
            <HeaderHome/>
            <HeroSection/>
            <View style={{height:50}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row", paddingHorizontal:15}}>
                    <TouchableWithoutFeedback>
                        <View  style={{marginTop :0,height:31, backgroundColor: "#0E4944", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:20}}>
                            <Text style={{color : "white", textAlign:"center"}}>Education</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:20}}>
                            <Text style={{color : "#F5F6F8", textAlign:"center"}}>Santé</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:20}}>
                            <Text style={{color : "#F5F6F8", textAlign:"center"}}>Environnement</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:20}}>
                            <Text style={{color : "#F5F6F8", textAlign:"center"}}>Famine</Text>
                        </View>
                    </TouchableWithoutFeedback>

              </ScrollView>
            </View>
            
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index)=>index.toString()}
              renderItem = {({item})=>{
                  return (
                    <View style={styles.shadow}>
                        <ImageBackground source={require('../images/cause-3.jpg')} resizeMode="cover" imageStyle={{borderRadius:10}} style={{height:200, justifyContent:"space-between", alignItems:"flex-end", flexDirection:"row", padding:10}}>
                            <View style={{flexDirection:"row",paddingVertical:5}}>
                              <Text style={{fontSize:10, paddingVertical:5, paddingHorizontal:10,backgroundColor:"#F5F6F8", borderRadius:20, marginLeft:10, fontStyle:"italic"}}>Education</Text>
                              <Text style={{fontSize:10, paddingVertical:5, paddingHorizontal:10, backgroundColor:"#F5F6F8", borderRadius:20, marginLeft:10, fontStyle:"italic"}}>Santé</Text>
                            </View>
                            <TouchableOpacity style={styles.share}>
                              <AntDesign name='sharealt' size={20} color={"#0E4944"}/>
                            </TouchableOpacity>
                        </ImageBackground>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
                            <View style={{padding:10, flexDirection:"row", alignItems:"center"}}>
                                <Image
                                    source={require('../images/icon.png')}
                                    style={{height: 50, width:50, borderRadius:25}}
                                />
                                <View style={{marginLeft:10}}>
                                  <Text style={{fontSize:12, color:"gray", fontStyle:"italic"}}>Par : Soutien.ga</Text>
                                  <Text style={{fontSize:12, color:"gray", fontStyle:"italic"}}>Publié le :  27 juillet 2021</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:10}}>
                              <Text >
                                Aidez notre ami à obtenir une meilleure éducation
                              </Text>
                            </View>
                            <View style={{padding:10}}>
                                <View style={{height:5, width:"100%", backgroundColor:"#F4F4F6", borderRadius:20}}>
                                    <View style={{height:5, borderRadius:20, backgroundColor:"#9BD35A", width:"80%"}}></View>   
                                </View>
                                <View style={{flexDirection:"row", paddingVertical:10, justifyContent:"space-between"}}>
                                    <Text style={{fontSize:12, color:"gray", fontStyle:"italic"}}>Objectif : </Text>
                                    <Text>XAF 500.000  {"(80%)"}</Text>
                                </View>
                                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                    <Text style={{fontSize:12, color:"gray", fontStyle:"italic"}}>Restant : </Text>
                                    <Text>XAF 100.000  {"(20%)"}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                  )
              }}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow : {
    height : 400,
    borderRadius : 10,
    width : width-100,
    borderColor : '#FBFBFC',
    borderWidth : 1,
    marginLeft : 20
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

export default HomeScreen;