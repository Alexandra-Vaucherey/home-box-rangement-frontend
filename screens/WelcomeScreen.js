import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function ProfileScreen({ navigation }) {
 return (
   <View style= {styles.container}>
     <Text style= {styles.title}>Bienvenue Utilisateur</Text>
     <Text style={styles.text}>Veuillez sélectionner vos habitats et dépendances</Text>
     <TouchableOpacity style= {styles.home}> 
     <FontAwesome icon = 'faHouseChimneyUser'/>
     <Text>Maison principale</Text>

     </TouchableOpacity>
     <Button
       title="Go to Home"
       onPress={() => navigation.navigate('Home')}
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
    },

    text: {
        fontSize: 24,

    }
  });
  