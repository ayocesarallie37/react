import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import FirebaseConfig from '../../../FirebaseConfig';
import { Button } from 'react-native-paper';
import {getDatabase,ref,get,update,child,set} from "firebase/database";

const [datos, setDatos] = React.useState(null)

useEffect(() => {
    obtenerdatos();
  }, []);

const obtenerdatos =async()=>{
    const db = getDatabase(FirebaseConfig.app);
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "CASA"));
      if (snapshot.exists()) {
        const datosObtenidos = snapshot.val();
        console.log("Datos obtenidos:", datosObtenidos);
        setDatos(datosObtenidos); // Actualiza el estado con los datos obtenidos
      } else {
        console.log("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
}

const cambiarestadoluz = async (lugar,nuevoestado) => {
    const db = getDatabase(FirebaseConfig.app);
    const referencia = ref(db, `CASA/${lugar}`);

    try {
      await update(referencia, { status: nuevoStatus });
      console.log("Datos actualizados correctamente");
      obtenerDatos(); // Vuelve a obtener los datos para reflejar los cambios
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
}

const ScreenPuerta2 = () => {
    return (
        <View style={styles.contenedor}>
            {datos ? (
                <>
                    <Text>Cocina estatus:(datos.luz.Cocina.status)</Text>
                    <Button icon={datos.luz.Cocina.status === 1 ? "lightbulb-on":"lightbubl-off"} mode={datos.luz.Cocina.status === 1 ? "contained":"outlined"} onPress={() => console.log(cambiarestadoluz('Luz/Cocina', datos.luz.Cocina.status === 1 ? 0:1))}>
                        Luz cocina
                    </Button>

                    <Button icon="camera" mode="contained" onPress={() => console.log(cambiarestadoluz)}>
                        Puerta sala
                    </Button>
                </>
                ) : (
                    <>
                    <Text>Cargando datos espere...</Text>
                    </>
                )}
        </View>
    )
}

export default ScreenPuerta2

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
    }
})