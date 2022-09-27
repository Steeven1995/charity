import React,{useState} from 'react';
import {SafeAreaView, Dimensions, StyleSheet, StatusBar, View, Image, TouchableOpacity, TextInput, Text, ActivityIndicator} from 'react-native';
import KeyboardAvoidingComponent from '../components/keyboardAvoid';
import {createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../config/firebase';

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#0E4944', white: '#fff', secondary:"#9BD35A"};

const RegisterScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [nom, setName] = useState('')
  const [password, setPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState(null)
  const [loading,setLoading] = useState(false);


 async function createAccount() {
  setLoading(true)
  if(email === '' || password === '' || nom === '' ){
    setValidationMessage('Tous les champs sont obligatoires');
    setLoading(false)
    return
  }else{
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setLoading(false)
      navigation.navigate('LoginScreen');
    } catch (error) {
      setValidationMessage(error.message);
      setLoading(false)
    }
    
   }
  }

  return (
    <KeyboardAvoidingComponent>

      <SafeAreaView
        style={{height: height, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary}}>
          <StatusBar backgroundColor={COLORS.primary} />
          <View style={{height:"10%", alignItems:"center"}}>
              <Image
                  source={require('../images/logo.png')}
                  style={{height: 51, width:145}}
              />
          </View>
          <View style={[styles.shadow, {height:"58%", width:"90%", backgroundColor:COLORS.white, borderRadius:24, paddingHorizontal:20, paddingVertical:20}]}>
              <View style={{width:"70%"}}>
                  <Text style={{fontSize:24, fontWeight:"bold"}}>Créer un nouveau Compte</Text>
              </View>
              {validationMessage && <Text style={styles.error}>{validationMessage}</Text>}
              <View style={[styles.input,{marginTop:30}]}>
              <TextInput
                  style={styles.inputForm}
                  placeholder="Votre nom complet"
                  value={nom}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={[styles.input,{marginTop:20}]}>
                <TextInput
                  style={styles.inputForm}
                  placeholder="Votre adresse email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                  />
              </View>
              <TouchableOpacity disabled={loading} onPress={()=>createAccount()} style={styles.submit}>
                    {loading && <ActivityIndicator size="small" color="white" style={{marginRight:20}}/>}
                  <Text style={{fontSize:16, color:"white"}}>
                    S'inscrire
                  </Text>
              </TouchableOpacity>
          </View>
          <View style={{height:"8%", width:"80%", backgroundColor:"white", borderBottomLeftRadius:24, borderBottomRightRadius:18, justifyContent:"center", alignItems:"center"}}>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={{color:"#C8C8C8", fontSize:12}}>
                      Vous avez déjà un compte ?
                  </Text>
                  <Text style={{color:"#9BD35A", fontWeight:"bold", textAlign:"center"}}>
                      Se connecter 
                  </Text>
              </TouchableOpacity>
          </View>

          <Text style={{marginTop:20, fontSize:14, color:"#F5F6F8"}}>
            Ou s'inscrire avec
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
    </KeyboardAvoidingComponent>

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
    },
    error: {
      marginTop: 10,
      color: 'red',
    }
  });

export default RegisterScreen;