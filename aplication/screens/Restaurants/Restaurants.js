import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet} from 'react-native'
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty'
import RestaurantAppButton from '../../components/Restaurant/RestaurantAppButton'
import BackgroundImage from '../../components/BackGroundImage'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as firebase from 'firebase';
import PreLoader from '../../components/PreLoader';
import {ListItem} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';

export default class Restaurants extends Component {
  refRestaurants;
  constructor(){
    super();
    this.state = {
      restaurants: [],
      loaded: false,
      restaurant_logo: require('../../../assets/images/icon_rest.png')
    };
    this.refRestaurants = firebase.database().ref().child('restaurants');

  }

  componentDidMount(){
    this.refRestaurants.on('value',(data)=>{
      let restaurants = [];
      data.forEach(fila =>{
          let objRestaurant = {
            id: fila.key,
            nombre: fila.val().nombre,
            capacidad: fila.val().capacidad,
            direccion: fila.val().direccion,
            descripcion: fila.val().descripcion,
            lat: fila.val().lat,
            lng: fila.val().lng
          };
          restaurants.push(objRestaurant);
      });
      console.log(restaurants);
      this.setState({
        restaurants: restaurants,
        loaded: true
      })
    });
  }

  static navigationOptions = ({navigation}) => {
    return (
      {
        title: "Restaurants",
        headerRight: (         
          <Icon name="home"
                style={{ marginRight: 20 }}
                size={20}
                color="white"
                onPress={() => {}}>
          </Icon>
        ),
        headerLeft: (
          <Icon name="bars"
            style={{ marginLeft: 20 }}
            size={20}
            color="white"
            onPress={() => {navigation.openDrawer();}}>
          </Icon>
        )
      }
    )
  }

  verRestaurant(restaurant){
    const navigateAction = NavigationActions.navigate({
      routeName:'DetailRestaurantScreen',
      params:{
        restaurant:restaurant
      }
  });
  this.props.navigation.dispatch(navigateAction);

  }
  
  renderRestaurant(restaurants){
    return(
      <ListItem containerStyle = {styles.item}
                titleStyle = {styles.title}
                roundAvatar
                title={`${restaurants.nombre} (Capacidad: ${restaurants.capacidad})`}
                leftAvatar={{source:this.state.restaurant_logo}}
                rightIcon={{name:"chevron-right",
                            type:'font-awesome',
                            color:'white',
                            marginRight:10,
                            fontSize:15}}
                onPress={()=>{this.verRestaurant(restaurants)}}>
                
      </ListItem>
    )
  }

  addRestaurant(){
    const navegador = NavigationActions.navigate({
      routeName:'AddRestaurantScreen'
      });
      this.props.navigation.dispatch(navegador);
  }
  
  render() {

    const {loaded,restaurants} = this.state;
    if(loaded === false){
      return (<PreLoader></PreLoader>);
    }

    if(restaurants.length == 0){
      return (
  
        <BackgroundImage source={require('../../../assets/images/bg2.jpg')}>
          <RestaurantEmpty></RestaurantEmpty>
          <RestaurantAppButton></RestaurantAppButton>
        </BackgroundImage>
  
      )      
    }

    return(
      <BackgroundImage source={require('../../../assets/images/bg2.jpg')}>
          <FlatList data= {restaurants}
                    renderItem = {(data)=>{
                      return this.renderRestaurant(data.item)
                    }}
                    keyExtractor={(data)=>{return data.id}}>
            
          </FlatList>
          <RestaurantAppButton miFuncion={this.addRestaurant.bind(this)}></RestaurantAppButton>
          
        </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    padding:7,
    margin: 1,
    backgroundColor:'rgba(206,206,206,0.4)'
  },
  title:{
    color:'white',
    fontWeight: 'bold'
  }
})
