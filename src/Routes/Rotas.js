import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Foto from '../Pages/Foto';
import Clube from '../Pages/Clube';
import Header from '../Components/Header';
import { Text, View } from 'react-native';

const Drwawer = createDrawerNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
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