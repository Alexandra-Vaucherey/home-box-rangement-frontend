import { useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { set } from 'mongoose';

export default function SignUpScreen() {

  const navigation = useNavigation();
  const [formData, setFormData] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleSubmit = () => { 
    fetch("http://192.168.15.116:19000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        passwordCheck: passwordCheck,
        email: email,
        phone: phone,

      }),
    })
      .then((response) => response.json())
      .then((data) => {
    setFormData('');
    setUsername('');
    setPhone('');
    setEmail('');
    setPassword('');
    setPasswordCheck('');
    if(username && phone && email && password && confirmPassword){
      navigation.navigate('Profile')     
    }else{
    alert('Merci de remplir tous les champs')
  }
})
  }


    return (
      <View style = {styles.container}>
       <View style = {styles.titleBox}>
        <Text style = {styles.title}>Espace</Text>
        <Text style = {styles.title}> d'inscription</Text>
       </View>
                
       <View >
        <Text style = {styles.subtitle}>Créer son compte</Text>
        </View>
        <View style = {styles.form}>
          <View style = {styles.input}>
        <Text>{'\u2022'} Utilisateur</Text>
        <TextInput style = {styles.inputText} onChangeText={(value) => setUsername(value)} value={username} placeholder='Utilisateur'/>
          </View>
          <View style = {styles.input}>
        <Text>{'\u2022'} Téléphone</Text>
        <TextInput style = {styles.inputText} onChangeText={(value) => setPhone(value)} value={phone} placeholder='Téléphone'/>
          </View>
          <View style = {styles.input}>
        <Text>{'\u2022'} Mail</Text>
        <TextInput style = {styles.inputText} onChangeText={(value) => setEmail(value)} value={email} placeholder='Mail'/>
          </View>
          <View style = {styles.input}>
        <Text>{'\u2022'} Mot de passe</Text>
        <TextInput style = {styles.inputText} onChangeText={(value) => setPassword(value)} value={password} secureTextEntry={true} placeholder='Mot de passe'/>
          </View>
          <View style = {styles.input}>
        <Text>{'\u2022'} Confirmer mot de passe</Text>
        <TextInput style = {styles.inputText} onChangeText={(value) => setPasswordCheck(value)} value={passwordCheck} secureTextEntry={true} placeholder='Confirmer mot de passe'/>
          </View>
        </View>
        <View style = {styles.buttons}>
       <TouchableOpacity style = {styles.signUp} onPress={() => handleSubmit()}><Text style = {styles.signUpText}>S'inscrire</Text></TouchableOpacity>
                 
        </View>     
      </View>
    );
   }

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 5,
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#084364',        
        textAlign: 'center',
        color: '#084364',
    },

    titleBox: {
      backgroundColor: '#66D1FF',
      borderRadius: 10,
      width : 270,
      marginVertical: 0,

    },

    subtitle : {
      backgroundColor: '#66D1FF',
      borderRadius: 10,
      width : 300,
      height: 40,
      textAlign: 'center',
      fontSize: 30,
      color: '#084364',
      fontWeight: 'bold',
    },

    form : {
      marginTop : 0,
    },

    input: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 15,  
    },

    inputText : {
      borderColor : 'black',
      borderWidth: 1,
      borderRadius: 20,
      width: 160,
      textAlign: 'center',
      marginLeft: 20,
    },

    signUp : {
      backgroundColor: '#66D1FF',
      borderRadius: 10,
      width: 170,
      height: 35,      
      justifyContent: 'center',
      elevation: 10,
    },
    
    signUpText : {
      textAlign: 'center',
      fontSize: 22,
    },

    text: {
        fontSize: 24,

    }


  });