import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';

export default function ProfileScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);
 return (
   <View style= {styles.container}>
     <Text style= {styles.title}>Profil</Text>
     <View>
     <Text style= {styles.text}>Téléphone</Text>
     <Text style= {styles.text}>Email</Text>
     <Text style ={styles.warning}>Notifications de péremption</Text>
     <Text style ={styles.warning}>Notifications de contrôle</Text>
     <Text style= {styles.dark}>Mode sombre</Text>
     </View>
     <TouchableOpacity style = {styles.passwordChange}><Text style={styles.password}>Changer mot de passe</Text></TouchableOpacity>
     <Button
       title="Go to Welcome"
       onPress={() => navigation.navigate('Welcome')}
     />
   </View>
 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#084364',
        backgroundColor: '#66D1FF',
        borderRadius: 10,
        width: 160,
        textAlign: 'center',
        elevation: 40,
    },
    
    text: {
      color: '#084364',

    },

    warning: {
      color: '#084364',
    },

    dark: {
      color: '#084364',
    },

    passwordChange: {
      backgroundColor: '#66D1FF',
      borderRadius: 10,
      width: 250,
      height: 35,      
      justifyContent: 'center',
      elevation: 10,
    },

    password: {
      textAlign: 'center',
      fontSize: 22,
    }
  });
  