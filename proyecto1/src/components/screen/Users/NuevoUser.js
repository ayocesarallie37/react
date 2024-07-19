import { Alert, StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React from 'react'

const NuevoUser = ({ route }) => {
    const hola = route.params.hola
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [user, setUser] = React.useState("");
    const [perfil, setPerfil] = React.useState("");

    const agregarusuario = async ()=>{
        
    }
    return (
        <View>
      // Crear los input.
            <TextInput
                style={{ marginTop: 10 }}
                label="Nombre"
                value={nombre}
                onChangeText={() => setNombre()}
            />

            <TextInput
                style={{ marginTop: 10 }}
                label="email"
                value={email}
                onChangeText={() => setEmail()}
            />

            <TextInput
                style={{ marginTop: 10 }}
                label="user"
                value={user}
                onChangeText={() => setUser()}
            />

            <TextInput
                style={{ marginTop: 10 }}
                label="perfil"
                value={perfil}
                onChangeText={() => setPerfil()}
            />

            <View>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
        </View>
    )
}

export default NuevoUser

const styles = StyleSheet.create({})