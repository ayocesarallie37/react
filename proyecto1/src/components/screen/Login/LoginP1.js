import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'


const LoginP1 = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>HOLA</Text>
      <Text style={styles.titulo2} >Iniciar seción</Text>
      <View style={styles.contenedorinput}>
      <TextInput
        style={styles.input}
        placeholder="USUARIO"
        keyboardType="text"
      />

<TextInput
        secureTextEntry
        style={styles.input}
        placeholder="PASSWORD"
        keyboardType="text"
      />

      <View style={{alignItems:'center'}}>
<TouchableOpacity 
style={styles.button} 
onPress={()=> Alert.alert('Procesando')}>
        <Text style={{color:'white',textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
</View>

      </View>
    </View>
  )
}

export default LoginP1

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#CDCDCD'
    }, 
    titulo:{
        textAlign:'center',
        fontSize:53,
        color:'black',
        fontWeight:'bold'
    },
    titulo2:{
        textAlign:'center',
        fontSize:20
    },
    contenedorinput:{
        padding:15,
        
    },
    input:{
        margin:10,
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    button:{
        width:250,
        padding:10,
        marginTop:25,
        backgroundColor:'#C469D8',
        borderRadius:15,
       
    },

    

});
