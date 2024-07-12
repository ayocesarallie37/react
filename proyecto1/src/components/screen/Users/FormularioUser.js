import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirebaseConfig from "../../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const FormularioUser = () => {
  const conexionbd = FirebaseConfig.bd;
  return (
    <View>
      <Text>FormularioUser</Text>
    </View>
  )
}

const AgregarUser = async () => {
  const conexionbd = FirebaseConfig.bd;
  try {
    const docRef = await addDoc(collection(conexionbd, "users"), {
      nombre: nombre,
      usuario: usuario,
      email: email,
      perfil: perfil,
      password: password,
    });
    console.log("Document written with ID: ", docRef.id);
    Cancelar();
    navegacion.navigate("usuarios");
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  Alert.alert("Dato guardado");
  obtenerdatos()
};

export default FormularioUser

const styles = StyleSheet.create({})