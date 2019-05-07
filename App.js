import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PreLoader from './aplication/components/PreLoader';
import GuestNavigator from './aplication/navigations/guest';
import LoggedNavigator from './aplication/navigations/logged';

import * as firebase from 'firebase';
import firebaseConfig from './aplication/utils/firebase';
firebase.initializeApp(firebaseConfig);

// !desactivar bug de caja amarilla solo usar cuando ya este en etapa de produccion porque desaparece todas alertas y posibles bugs
// console.disableYellowBox = true;

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLogged: false,
      loaded: false,
    };
    // firebase.auth().signOut();
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        // no tiene session iniciada
        this.setState({
          isLogged: false,
          loaded: true,
        });        
      }else{
        this.setState({
          isLogged: true,
          loaded: true,        
        })
      }
    })
  }

  render() {
    const {isLogged, loaded} = this.state;
    if(!loaded){
      // mostrar un spinner de carga
      return(<PreLoader></PreLoader>)
    }
    if(isLogged){
      // el usuario ya tenia una sesion activa
      return (
        <LoggedNavigator></LoggedNavigator>)
    }else{
      return (<GuestNavigator/>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

      // <Start>

      // </Start>
      // <BackGroundImage source={require('./assets/images/bg2.jpg')}>
      //     <Text style={{color: 'white'}}>Alocate</Text>
      // </BackGroundImage>
      // <PreLoader>

      // </PreLoader>
      // <View style={styles.container}>
      //   <AppButton title = "Ejemplo"
      //              iconName = "sign-in"
      //              bgColor = "rgb(254, 21, 73)"
      //              iconSize = {30}
      //              action = {()=>{console.log(1);}}
      //              iconColor = "#fff"
      //              setWidth = {false}></AppButton>
      //   {/* <Text>Mi primera aplicacion en react-native</Text> */}
      //   <AppButton title = "Otro Boton"
      //              iconName = "sign-in"
      //              bgColor = "#fe1549"
      //              iconSize = {30}
      //              action = {()=>{console.log(1);}}
      //              iconColor = "#fff"
      //              setWidth = {true}></AppButton>
      // </View>
  