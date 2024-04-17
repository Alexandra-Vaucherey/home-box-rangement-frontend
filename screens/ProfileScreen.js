import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  const [notificationsChecked, setNotificationsChecked] = useState(false);
  const [controlsChecked, setControlsChecked] = useState(false);
  const [darkModeChecked, setDarkModeChecked] = useState(false);
  

  const handleNotificationsChange = () => {
    setNotificationsChecked(!notificationsChecked);
  };

  const handleControlsChange = () => {
    setControlsChecked(!controlsChecked);
  };

  const handleDarkModeChange = () => {
    setDarkModeChecked(!darkModeChecked)
  };

 return (
   <View style= {styles.container}>
     <Text style= {styles.title}>Profil</Text>
     <View>
     <Text style= {styles.text}>Téléphone</Text>
     <Text style= {styles.text}>Email</Text>
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
     <RadioButton  value="notifications" status={ notificationsChecked ? 'checked' : 'unchecked' } onPress={() => handleNotificationsChange('notifications')}/>   
     <Text style ={styles.warning}>Notifications de péremption</Text>
     </View>
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton  value="controls" status={ controlsChecked ? 'checked' : 'unchecked' } onPress={() => handleControlsChange('controls')}/>
     <Text style ={styles.warning}>Notifications de contrôle</Text>
     </View>
     <View style={{ flexDirection: 'row', alignItems: 'center'}}>
     <RadioButton  value="darkMode" status={ darkModeChecked ? 'checked' : 'unchecked' } onPress={() => handleDarkModeChange('darkMode')}/>
     <Text style= {styles.dark}>Mode sombre</Text>
     </View>
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
      marginLeft: 35,
      fontSize: 20,
    },

    warning: {
      color: '#084364',
      fontSize: 20,
    },

    dark: {
      color: '#084364',
      fontSize: 20,
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
      fontSize: 26,
    }
  });
  