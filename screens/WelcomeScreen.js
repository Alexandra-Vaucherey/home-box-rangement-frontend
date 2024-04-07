import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faHouseChimneyUser} from '@fortawesome/free-solid-svg-icons/faMugSaucer'


export default function ProfileScreen({ navigation }) {
 return (
   <View style= {styles.container}>
    <View>
      <FontAwesome name='trash-o' />
    </View>
     <Text style= {styles.title}>Bienvenue Utilisateur</Text>
     <Text style={styles.text}>Veuillez sélectionner vos habitats et dépendances</Text>
     <TouchableOpacity style= {styles.home}> 
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
        backgroundColor: '#66D1FF',
        borderRadius: 10,
        width: 270,
        textAlign: 'center',
    },

    text: {
        fontSize: 24,

    }
  });
  