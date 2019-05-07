import {createStackNavigator,
        createAppContainer,
        createDrawerNavigator} from 'react-navigation';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import LogoutScreen from '../screens/Logout'
import AddRestaurantScreen from './../screens/Restaurants/AddRestaurant'
import DetailRestaurantScreen from './../screens/Restaurants/DetailRestaurant'

const navigationOptions = {
    
        initialRouteName: 'RestaurantsScreen',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: 'rgba(30,30,30,1)',
            },
            headerTitleStyle:{
                textAlign:'center',
                alignSelf:'center',
                fontSize:20,
                color: '#fff',
                fontWeight: 'bold',
                flex:1
            }
        }    
}

const restaurantSreenStack = createStackNavigator(
    {
    RestaurantsScreen:{
        screen: RestaurantsScreen
        },  
    AddRestaurantScreen:{
        screen: AddRestaurantScreen
        },
    DetailRestaurantScreen:{
        screen: DetailRestaurantScreen
        }            
    },

    navigationOptions
);

const logoutScreenStack = createStackNavigator(
    {
        LogoutScreen: {
            screen: LogoutScreen
        },
    }
)

const miDrawerNavigation = createDrawerNavigator({

    RestScreen:{
        screen: restaurantSreenStack,
        navigationOptions:()=>{
            return ({
                drawerLabel: "Mis Restaurantes",
                drawerIcon: ()=>{
                    return (
                        <Icon name="home"
                              size={24}
                              style={{color: 'white'}}></Icon>
                    )
                }
            })
        }
    },
    LogoutScreen:{
        screen: logoutScreenStack,
        navigationOptions:()=>{
            return ({
                drawerLabel: "Cerrar Sesion",
                drawerIcon: ()=>{
                    return (
                        <Icon name="sign-out"
                              size={24}
                              style={{color: 'white'}}></Icon>
                    )
                }
            })
        }

    }    
},
{
    drawerBackgroundColor: 'rgba(30,30,30,0.6)',
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: 'white',
        itemsContainerStyle: {
            marginVertifal: 0
        }

    }
}
)

export default createAppContainer(miDrawerNavigation);