import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';



export default function HomeScreen({ navigation }) {
 return (
   <View style = {styles.container}>
    <View>
     <Text style = {styles.title}>Home Box Rangement</Text>
    </View>
     <View>
     <TextInput style = {styles.user} placeholder={'Utilisateur'}/>
     <TextInput style = {styles.password} placeholder={'Mot de passe'} secureTextEntry={true}/>
     </View>
     <View style = {styles.buttons}>
    <TouchableOpacity style = {styles.signIn} onPress={() => navigation.navigate('Profile')}><Text style = {styles.signInText}>Connexion</Text></TouchableOpacity>
    <TouchableOpacity style = {styles.signUp}  onPress={() => navigation.navigate('SignUp')}><Text style = {styles.signUpText}>Inscription</Text></TouchableOpacity>
       
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',

    },

    title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#084364',
        
       
    },

    user: {
        fontSize: 24,
        borderWidth: 1,
        borderColor : 'black',
        borderRadius: 10, 
        height: 50,
        width: 250,
        marginBottom: 30, 
        textAlign: 'center',
        fontSize: 36,
    },

    password: {
        fontSize: 24,
        borderWidth: 1,
        borderColor : 'black',
        borderRadius: 10, 
        height: 50,
        width: 250,
        textAlign: 'center',
        fontSize: 36,
    },


    signIn:  {
        borderRadius: 10,
        width: 200,
        height: 40, 
        backgroundColor: '#66D1FF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginBottom: 20, 
        fontSize: 18,
    },

    signUp: {  
        borderRadius: 10,
        width: 200,
        height: 40, 
        backgroundColor: '#084364',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },

    signInText:{
        fontSize: 22,

    },

    signUpText: {        
        color: 'white',
        fontSize: 22,
    }



  });