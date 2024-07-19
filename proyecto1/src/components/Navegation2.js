import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// importar sreen
import LoginP1 from "./screen/Login/LoginP1";
import Navegation2 from "./Navegation2";
import CrearCuenta from ""

const Stack = createStackNavigator();

function MyStackLogin(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginP1}/>
            <Stack.Screen name="crearcuenta" component={UserDetalles}/>
            <Stack.Screen name="dash" component={UserDetalles}/>
        </Stack.Navigator>
    )
}

export default function Navegation (){

    return(
        <NavigationContainer>
            <MyStackLogin/>
        </NavigationContainer>
    )
  
}