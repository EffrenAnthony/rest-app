import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackGroundImage from '../../components/BackGroundImage';
import { ScrollView } from 'react-native-gesture-handler';
import Restaurant from '../../components/Restaurant/Restaurant';
import {NavigationActions} from 'react-navigation';
import CommentList from '../../components/Comentarios/ComentList'

export default class DetailRestaurant extends Component {

    constructor(props){
        super(props);
        const entrada = props.navigation.state.params;
        this.state = {
            restaurant: entrada.restaurant
        }
    }

    regresar(){
        const navigateAction = NavigationActions.navigate({
            routeName:'RestaurantsScreen'
        });
        this.props.navigation.dispatch(navigateAction);
    }
  render() {
    return (
        <BackGroundImage source={require('./../../../assets/images/bg2.jpg')}>
            <ScrollView>
                <Restaurant restaurant={this.state.restaurant}
                            goHome={this.regresar.bind(this)}>

                </Restaurant>
                {/* aqui va el fomrulario para drear un nuevo comentario */}

                {/* aqui va la lsita de comentarios */}
                <CommentList restaurantId={this.state.restaurant.id}></CommentList>
            </ScrollView>
        </BackGroundImage>
      
    )
  }
}
