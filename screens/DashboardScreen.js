import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style = {styles.container}>
       <View style={styles.header}>
        <FontAwesome name='home' size={40} color={'#084364'} style={{marginRight: 20}}/>
        <Text style = {styles.title}>Tableau de bord</Text>
        <FontAwesome name='gear' size={40} color={'#084364'} style={{marginLeft: 20}}/>
       </View>
        <View>
  
        </View>
        <View style = {styles.buttons}>
       <TouchableOpacity style = {styles.add} ><FontAwesome name='plus' size={30} color={'#084364'}/></TouchableOpacity>
        </View>
       <TouchableOpacity><FontAwesome name='search' size={38} color={'#084364'}/></TouchableOpacity>
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
        fontSize: 50,
        fontWeight: 'bold',
        color: '#084364',
        backgroundColor: '#66D1FF',
        borderRadius: 10,
        width: 270,
        textAlign: 'center',
        elevation: 40,
       },

       header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       },

       add: {
        backgroundColor: '#66D1FF',
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
       }
    })