import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
  signOut,
} from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function MyProfil() {

  const logout = () => {
    return signOut(auth)
  }
  
  return (
    <View style={{flex: 1, backgroundColor:"#0E4944"}}>
      <View style={{flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor : "white", width:"100%", paddingHorizontal:20}}>
        <View style={{paddingTop:20}}>
            <Text style={{fontSize:20}}>Mon profil</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:20}}>
          <Image source={require('../images/image.png')} style={{width:80, height:80, borderRadius:40}}/>
          <View>
            <Text style={{fontSize:16, fontWeight:"bold"}}>Gabin Moundziegou</Text>
            <Text style={{fontSize:12, color:"#3B3B3B"}}>gabinmoundziegou@gmail.com</Text>
          </View>
          <TouchableOpacity style={{height:30, width:30, borderRadius:5, backgroundColor:"#DEDDDD", justifyContent:"center",alignItems:"center"}}>
            <FontAwesome name='pencil' size={20} color="white"/>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:"center", alignItems:"center", position:"absolute", bottom:40, height : 60, width:"100%", paddingHorizontal:20, left:20}}>
          <TouchableOpacity onPress={()=>logout()} style={{width:"100%",backgroundColor:"#0E4944", justifyContent:"center", alignItems:"center", borderRadius:5,  height : 60}}>
            <Text style={{color:"white", fontSize:14, fontWeight:"bold"}}>Se deconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
