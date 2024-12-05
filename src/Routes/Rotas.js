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
import Agend1 from '../Pages/Agend1';
import Regras from '../Components/Regras';
import Agend2 from '../Components/Agend2';
import Pagamento from '../Pages/Pagamento';


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
                    name="Pagamento"
                    component={Pagamento}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="pagamento" color={color} size={size} />
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
                    name="Agendamento"
                    component={Agend1}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="agend1" color={color} size={size} />
                        ),
                    }}
                    />
                <Drawer.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        drawerItemStyle: {
                            display: 'none',
                        },
                        title: "",
                        tabBarButton: (props) => null
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}