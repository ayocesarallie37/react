import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const navegacion = useNavigation();

const ScreenUser = () => {
  return (
    <View style={styles.contenedorprincipal}>
      <View style={styles.contenedorButon}>
        <Text>Screen User</Text>
        <Button theme={{ colors: { primary: 'purple' } }}
          icon="account"
          mode="contained"
          onPress={() => 
            navegacion.navigate("nuevouser", {
              hola:'hola mundo',
              funciondata: 'obtenerdatos'
            })
          }>
          Nuevo usuario
        </Button>

        <View>
          <Card mode="contained" elevation={2}>

          </Card>
        </View>
      </View>
    </View>
  )
}

export default ScreenUser

const styles = StyleSheet.create({})