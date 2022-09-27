import React from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default function CategorieList() {
  return (
    <View style={{height:50}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row", marginTop:10, paddingHorizontal:20}}>
                <TouchableWithoutFeedback>
                    <View  style={{marginTop :0,height:31, backgroundColor: "#0E4944", justifyContent:"center", alignItems:"center", paddingHorizontal:15, borderRadius:5}}>
                        <Text style={{color : "white", textAlign:"center"}}>Tout</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:5}}>
                        <Text style={{color : "#F5F6F8", textAlign:"center"}}>Education</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:5}}>
                        <Text style={{color : "#F5F6F8", textAlign:"center"}}>Santé</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:5}}>
                        <Text style={{color : "#F5F6F8", textAlign:"center"}}>Environnement</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View  style={{marginTop :0,height:31, backgroundColor: "#C9C9C9", justifyContent:"center", alignItems:"center", paddingHorizontal:15, marginLeft: 10, borderRadius:5}}>
                        <Text style={{color : "#F5F6F8", textAlign:"center"}}>Alimentation</Text>
                    </View>
                </TouchableWithoutFeedback>

        </ScrollView>
    </View>
  );
}
