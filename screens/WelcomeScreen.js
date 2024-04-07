import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faHouseChimneyUser} from '@fortawesome/free-solid-svg-icons/faMugSaucer'


export default function ProfileScreen({ navigation }) {
 return (
   <View style= {styles.container}>
    <View style= {styles.header}>
      <FontAwesome name='home' size ={44} color = "#084364" style={{marginRight: 20}}/>
     <Text style= {styles.title}>Bienvenue Utilisateur</Text>
      <FontAwesome name='gear' size ={44} color = "#084364" style={{marginLeft: 20}}/>
    </View>
     <Text style={styles.text}>Veuillez sélectionner vos habitats et dépendances</Text>
     <TouchableOpacity style= {styles.home}> 
     <FontAwesome name='home' size={30} color={'#084364'} style={{marginRight: 20}}/>
     <Text style={styles.homeText}>Maison {'\n'}principale</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.add}>
      <FontAwesome name='plus' size={30} color={'#084364'}/>
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

    header: {
      display: 'flex',
      flexDirection: 'row',
     alignItems: 'center', 
     justifyContent: 'space-between',
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
        textAlign: 'center',

    },

    home: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'white',      
      elevation: 10,
      height: 50,
      width: 150,    
      justifyContent: 'center',
    },

    homeText: {
      textAlign: 'center',
      color: '#084364',
      fontSize: 18,
    },

    add: {
      backgroundColor:  '#66D1FF',
      height: 40,
      width: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  