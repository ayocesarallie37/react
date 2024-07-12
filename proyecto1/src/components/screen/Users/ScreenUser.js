import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TablaGeneralUser from './TablaGeneralUser';
import FirebaseConfig from "../../../FirebaseConfig";
import { collection, getDocs, doc } from "firebase/firestore";
const navegacion = useNavigation();

const ScreenUser = () => {

  const bd = FirebaseConfig.bd;

  const [datos, setDatos] = React.useState([
    {
      id: 0,
      nombre: "",
      email: "",
      perfil: "",
    },
  ]);

  const obtenerdatos = async () => {
    const user = [];
    const querySnapshot = await getDocs(collection(bd, "users"));
    querySnapshot.forEach((doc) => {
      const { email, nombre, perfil, usuario } = doc.data();
      user.push({
        id: doc.id,
        email,
        nombre,
        perfil,
        usuario,
      });
    });

    setDatos(user);
  };

  useEffect(() => {
    obtenerdatos();
  }, []);


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
          <TablaGeneralUser
          datosuser={datos}
          />
        </View>
      </View>
    </View>
  )
}

export default ScreenUser

const styles = StyleSheet.create({})