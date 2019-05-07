import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import AppButtons from '../AppButtons';
import RestaurantRating from './RestaurantRating';
import {NavigationActions} from 'react-navigation';



export default class Restaurant extends Component {
  render() {
      const restaurant = this.props.restaurant;
      const goHome = this.props.goHome;
    return (
      <Card title={restaurant.nombre}
            image={require('./../../../assets/images/store.png')}>
            {/* Aqui va el promedio de calificaiones del rest */}
            <RestaurantRating restaurantId={restaurant.id}/>
            <Text style={{marginBottom:10,marginTop:10}}>
                {restaurant.descripcion}
            </Text>
            <AppButtons bgColor="rgba(0, 59, 101, 1)"
                        title="Editar Restaurant"
                        action={()=>{}}
                        iconName="pencil"
                        iconSize={30}
                        iconColor="#fff">
            </AppButtons>
            <AppButtons bgColor="rgba(255, 38, 74, 1)"
                        title="Volver"
                        action={goHome}
                        iconName="chevron-left"
                        iconSize={30}
                        iconColor="#fff">
            </AppButtons>
            

      </Card>
    )
  }
}
