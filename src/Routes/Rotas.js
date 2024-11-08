import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Foto from '../Pages/Foto';
<<<<<<< HEAD
import Clube from '../Pages/Clube';
import Header from '../Components/Header';
import { Text, View } from 'react-native';
=======
import Perfil from '../Pages/Perfil';
import Cadastro from '../Pages/Cadastro';
>>>>>>> f9ee73b5e926d88409047276e00059543122bd21

const Drwawer = createDrawerNavigator();

export default function Rotas() {

    const[logado, setLogado] = useState(false);
    const[cadastro, setCadastro] = useState(false);

    if( !logado && !cadastro ) {
        return(<Login setCadastro={setCadastro}/>)
    }
  
    if( !logado && cadastro) {
        return(<Cadastro setCadastro={setCadastro} />)
    }

    return (
        <NavigationContainer>
            <Drwawer.Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "red",
                        height: 150
                    },
                    header: (props) => (<Header props={props} />),
                    tabBarActiveTintColor: "white"
                }}


            >
                <Drwawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),

                    }}
                />
                <Drwawer.Screen
                    name="Foto"
                    component={Foto}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={size} />
                        ),
                    }}
                />

                <Drwawer.Screen
                    name="Clube"
                    component={Clube}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="clube" color={color} size={size} />
                        ),
                    }}
                />
            </Drwawer.Navigator>
        </NavigationContainer>
    )
}