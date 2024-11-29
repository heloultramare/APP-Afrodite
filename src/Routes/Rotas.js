import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Foto from '../Pages/Foto';
import Clube from '../Pages/Clube';
import Header from '../Components/Header';
import Perfil from '../Pages/Perfil';
import Cadastro from '../Pages/Cadastro';
import Regras from '../Components/Regras';
import Agend2 from '../Components/Agend2';

const Drawer = createDrawerNavigator();

export default function Rotas() {

    const {logado} = useContext( AuthContext );
    const[cadastro, setCadastro] = useState(false);

    if( !logado && !cadastro ) {
        return(<Login setCadastro={setCadastro}/>)
    }
  
    if( !logado && cadastro) {
        return(<Cadastro setCadastro={setCadastro} />)
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
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
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),

                    }}
                />
                <Drawer.Screen
                    name="Foto"
                    component={Foto}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={size} />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="Clube"
                    component={Clube}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="clube" color={color} size={size} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: "",
                        tabBarButton: (props) => null
                    }}
                />
                <Drawer.Screen
                    name="Agend2"
                    component={Agend2}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="agend2" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}