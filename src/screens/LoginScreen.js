import React from 'react';
import {SafeAreaView, Text, Dimensions, StyleSheet, StatusBar, View, Image, TouchableOpacity, TextInput} from 'react-native';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#0E4944', white: '#fff', secondary:"#9BD35A"};

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary}}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={{height:"10%", alignItems:"center"}}>
            <Image
                source={require('../images/logo.png')}
                style={{height: 51, width:145}}
            />
        </View>
        <View style={[styles.shadow, {height:"53%", width:"90%", backgroundColor:COLORS.white, borderRadius:24, paddingHorizontal:20, paddingVertical:20}]}>
            <View style={{width:"55%"}}>
                <Text style={{fontSize:24, fontWeight:"bold"}}>S'identifier pour continuer</Text>
            </View>
            <View style={[styles.input,{marginTop:50}]}>
              <TextInput
                style={styles.inputForm}
                placeholder="Email ou numéro de téléphone"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                  style={styles.inputForm}
                  placeholder="Mot de passe"
                />
            </View>
            <TouchableOpacity style={styles.submit}>
                <Text style={{fontSize:16, color:"white"}}>
                  Connexion
                </Text>
            </TouchableOpacity>
            <View style={{justifyContent:"center", flexDirection:"row", marginTop:20}}>
                <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
                    <Text style={{color:"#9BD35A", fontWeight:"bold"}}>
                      Mot de passe oublié ?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height:"8%", width:"80%", backgroundColor:"white", borderBottomLeftRadius:24, borderBottomRightRadius:18, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={{color:"#C8C8C8", fontSize:12}}>
                    Vous n'avez pas encore de compte ?
                </Text>
                <Text style={{color:"#9BD35A", fontWeight:"bold", textAlign:"center"}}>
                    Créer un compte 
                </Text>
            </TouchableOpacity>
        </View>

        <Text style={{marginTop:20, fontSize:14, color:"#F5F6F8"}}>
          Ou se connecter avec
        </Text>

        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", marginTop:30, marginBottom:30}}>
          <View style={{width:"35%", flexDirection:"row", justifyContent:"space-between"}}>
              <TouchableOpacity style={styles.btnRs}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../images/facebook.png')}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRs}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../images/gmail.png')}
                  />
              </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    shadow : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    btnRs : {
      height: 60,
      width: 60,
      borderRadius:10,
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center"
    },
    input : {
        width:'100%',
        height:56,
        backgroundColor:"#F5F6F8",
        borderRadius :10,
        marginTop:20
    },

    inputForm : {
      height: 56,
      borderWidth: 0,
      padding: 10,
    },

    submit : {
      height : 60,
      width:"100%",
      backgroundColor:"#0E4944", 
      marginTop:30,
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    },
    tinyLogo : {
      height: 20,
      width:20
    }
  });

export default LoginScreen;