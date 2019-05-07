import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase';
import {Alert}  from 'react-native';

export default class Logout extends Component {

    componentDidMount(){
        firebase.auth().signOut().then(()=>{
            Alert.alert("Cierre de Sesion","Has cerrado sesion");
        }).catch((error)=>{
            Alert.alert("Ups!","Ocurrio un error al cerrar sesion");
        });
    }

  render() {
    return null;
    
  }
}
