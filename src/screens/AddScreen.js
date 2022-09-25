import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform, Button} from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';



const buttonTextStyleFirst = {
    paddingHorizontal:100,
    paddingVertical : 10,
    backgroundColor :"#9BD35A",
    borderRadius : 10,
    color:"white"
}
const buttonTextStyle = {
    width : 100,
    paddingVertical : 10,
    backgroundColor :"#9BD35A",
    borderRadius : 10,
    color:"white",
    textAlign:"center",
    fontSize : 12
}

const Categories = [
    {
        id : 1,
        title : "Education",
        image : require('../images/education.png'),
    },
    {
        id : 2,
        title : "Santé",
        image : require('../images/sante.png'),
    },
    {
        id : 3,
        title : "Alimentation",
        image : require('../images/food.png'),
    },
    {
        id : 4,
        title : "Environnement",
        image : require('../images/environnement.png'),
    },
    {
        id : 5,
        title : "Animal",
        image : require('../images/animal.png'),
    },
    {
        id : 6,
        title : "Culture",
        image : require('../images/culture.png'),
    }
]


const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
        style={{flexWrap:"wrap"}}
      />
    );
  }
const AddScreen = () => {

    const [clikedId, setClickedId] = React.useState(null)
    const [image, setImage] = React.useState(null);
    const [value, onChangeText] = React.useState('Description de la campagne de financement');
    const [date, setDate] = React.useState(new Date())
    const [mode, setMode]= React.useState('date')
    const [show, setShow]  = React.useState(false)
    const [text, setText]= React.useState('Definir une deadline')


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    const onChange = (event, selectedDate)=>{
        const currentDate = selectedDate || date;
        setShow(Platform.OS==='android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        console.warn(tempDate)
        let fDate = tempDate.getDate() + "-" + (tempDate.getMonth()+1) + "-"+ tempDate.getFullYear();
        setText(fDate)
        setShow(false)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const handleCliked = (item, index)=>{
        setClickedId(index)
    }

    return (
        <View style={{flex: 1, backgroundColor:"#0E4944"}}>
            <View style={{flex:1,borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor : "white", width:"100%"}}>
                <View style={{paddingTop:20, paddingHorizontal:20}}>
                    <Text style={{fontSize:20}}>Créer une campagne</Text>
                    <Text style={{fontSize:12, marginTop:10, color:"#3B3B3B"}}>
                        Compléter quelques informations pour créer ce programme caritatif
                    </Text>
                </View>
                <ProgressSteps>
                    <ProgressStep label="Categorie" nextBtnText="Suivant" nextBtnTextStyle={buttonTextStyleFirst}>
                        <View style={{ alignItems: 'center' }}>
                        <View style={{flexWrap:"wrap", justifyContent:"space-around", flexDirection:"row", marginTop:10, width:"70%"}}>   
                            {
                                Categories.map((categorie, index)=>{
                                    return (
                                        <View key={index} style={{justifyContent:"center", alignItems:"center"}}>
                                            <TouchableOpacity onPress={(item)=>handleCliked(item,index)}style={[
                                                index===clikedId ? styles.btnClasseSelected : styles.btnClasse
                                            ]}>
                                                <Image source={categorie.image} style={{height:30, width:30}} />
                                            </TouchableOpacity>
                                            <Text style={{fontSize:10, color:"#B6B6B6"}}>{categorie.title}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="La campagne" previousBtnText="Précédant" nextBtnText="Suivant" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center'}}>
                            <View style={{width:"90%"}}>
                                <View style={[styles.input,{marginTop:20}]}>
                                    <TextInput
                                    style={styles.inputForm}
                                    placeholder="Titre du programme"
                                    />
                                </View>
                               
                                <View style={[styles.inputRow,{marginTop:10}]}>
                                    <View style={styles.btnIcon}>
                                        <FontAwesome name='dollar' size={22} color="white"/>
                                    </View>
                                    <TextInput
                                    style={styles.inputForm}
                                    placeholder="Objectifs"
                                    keyboardType='numeric'
                                    />
                                </View>
                                <TouchableOpacity onPress={()=>showMode('date')} style={[styles.inputRow,{marginTop:10}]}>
                                    <View style={styles.btnIcon}>
                                        <FontAwesome name='calendar' size={22} color="white"/>
                                    </View>
                                    <Text> {text} </Text>
                                    {show && (
                                        <DateTimePicker 
                                            testID='dateTimePicker'
                                            value={date}
                                            mode={mode}
                                            is24Hour = {true}
                                            display = 'default'
                                            onChange={()=>onChange()}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Description"  previousBtnText="Précédant" finishBtnText="Valider"  nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>Ajouter une image de couverture</Text>
                            {image ? 
                                <TouchableOpacity style={{height: 200,width:"100%"}} onPress={pickImage} >
                                    <Image source={{ uri: image }} style={{height: 200,width:"100%", resizeMode:"contain"}} />
                                </TouchableOpacity>
                                : 
                                <TouchableOpacity style={styles.image} onPress={pickImage} >
                                    <Image source={require('../images/image.png')} style={{height :100, width:100}}/>
                                </TouchableOpacity>
                            }

                            <View
                                style={{
                                    backgroundColor: value,
                                    borderColor: '#000000',
                                    borderWidth: 1,
                                    width : "90%", 
                                    height : 180,
                                    marginTop : 20,
                                    padding : 20,
                                    borderRadius : 5
                                }}>
                                <UselessTextInput
                                    multiline
                                    numberOfLines={4}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                    style={{padding: 10}}
                                />
                                </View>
                            </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    btnClasse : {
        height :100,
        width : 100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : "#F5F6F8",
        borderRadius : 50,
        marginTop : 20,
    },
    textClasse : {
        fontSize : 48,
        fontWeight  :"bold"
    },
    btnClasseSelected : {
        height :100,
        width : 100,
        justifyContent:"center",
        alignItems:"center",
        borderColor : "#0E4944",
        borderWidth : 1,
        marginTop : 20,
        borderRadius : 50,
    },
    textClasseSelected : {
        fontSize : 48,
        fontWeight  :"bold",
        color : "white",
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
    inputRow : {
        width:'100%',
        height:56,
        backgroundColor:"#F5F6F8",
        borderRadius :10,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal : 10
    },
    btnIcon : {
        height : 40,
        width : 40,
        borderRadius : 5,
        backgroundColor : "#0E4944",
        justifyContent:"center",
        alignItems:"center"
    },
    image : {
        borderStyle:"dashed",
        borderRadius : 5,
        borderWidth : 1,
        borderColor : "gray",
        width : "90%",
        paddingVertical:10,
        justifyContent : "center",
        alignItems:"center"
    }
})
export default AddScreen
