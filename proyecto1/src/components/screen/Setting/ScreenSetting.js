import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signOut } from "firebase/auth"

const ScreenSetting = () => {
  const navegacion = useNavigation();
  const cerrarsesion =()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Aviso','Sesión cerrada correctamente')
        navegacion.navigate('login');
      })
      .catch((error) => {
        console.error('Error cerrando la sesión: ', error);
      });
  }
  return (
    <View>
      <Text>Acerca de</Text>
      <Text>Integrantes del equipo: </Text>
      <Text>Versión 1.0</Text>
      <Button style={{marginTop:20}} theme={{ colors: { primary: 'purple' } }}
      icon="logout" 
      mode="contained" 
      onPress={() => cerrarsesion()}>
   Cerrar sesión
  </Button>
    </View>
  )
}

export default ScreenSetting

const styles = StyleSheet.create({})