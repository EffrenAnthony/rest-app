import React, { Component } from 'react'
import BackgroundImage from '../components/BackGroundImage';
import AppButton from './../components/AppButtons';
import { View, Alert } from 'react-native';
import {NavigationActions} from 'react-navigation';
import facebook from './../utils/facebook';
import * as firebase from 'firebase';

export default class Start extends Component {

    static navigationOptions = {
        title: 'Rest-App CodiGo'
    }

    login() {
        const navegador = NavigationActions.navigate({
            routeName:'Login'
        });
        this.props.navigation.dispatch(navegador);
    }
    register() {
        const navegador = NavigationActions.navigate({
            routeName:'Register'
        });
        this.props.navigation.dispatch(navegador);
    }
    async facebook() {
        const{type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
          facebook.application_id,
          {
            permissions: facebook.permissions
          });
          if(type === "success"){


            // ? A traves del token

            //   const respuesta = await fetch("https://graph.facebook.com/me?access_token="+token+"&fields=picture");
            //   const info = await respuesta.json();
            //   console.log(info);
              
            //   ?firebase
              const misCredenciales = await firebase.auth.FacebookAuthProvider.credential(token);
              firebase.auth().signInAndRetrieveDataWithCredential(misCredenciales).catch(error=>console.log(error));



            // Alert.alert("exito","exito al iniciar sesio");            
          }else if(type === "cancel"){
            Alert.alert("cancelado","el usuario canceló el inicio de sesión");
          }else{
            Alert.alert("Error siñorsh");
          }
    }

    render() {
        return (
            <BackgroundImage source={require('./../../assets/images/bg2.jpg')}>
                <View style={{ justifyContent: "center", flex: 1 }}>
                    <AppButton bgColor="rgba(255,53,94,0.7)"
                        iconName="sign-in"
                        title="Iniciar Sesión"
                        iconSize={30}
                        iconColor="#fff"
                        action={this.login.bind(this)}
                        setWidth={true} />
                    <AppButton bgColor="rgba(0,211,145,0.7)"
                        iconName="user-plus"
                        title="Registrarme"
                        iconSize={30}
                        iconColor="#fff"
                        action={this.register.bind(this)}
                        setWidth={true} />
                    <AppButton bgColor="rgba(59,89,152,0.7)"
                        iconName="facebook"
                        title="Facebook"
                        iconSize={30}
                        iconColor="#fff"
                        action={this.facebook.bind(this)}
                        setWidth={true} />
                </View>
            </BackgroundImage>
        )
    }
}