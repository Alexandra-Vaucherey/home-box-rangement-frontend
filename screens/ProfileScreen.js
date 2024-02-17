import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({ navigation }) {
 return (
   <View style= {styles.container}>
     <Text style= {styles.title}>Profil</Text>    
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
    },


  });
  