import React, { Component } from 'react'
import { Text, View , StyleSheet, Alert,KeyboardAvoidingView} from 'react-native'
import {Restaurant, options} from './../../forms/crearRestaurant'
import BackgroundImage from '../../components/BackGroundImage'
import { Card } from 'react-native-elements';
import t from 'tcomb-form-native';
import AppButtons from '../../components/AppButtons';
import * as firebase from 'firebase' 
import { NavigationActions } from 'react-navigation';

const Form = t.form.Form

export default class AddRestaurant extends Component {

    constructor(){
        super();
        this.state = {
            restaurant:{
                nombre:'',
                dscripcion:'',
                direccion:'',
                capacidad:0,            
            }
        }
    }
    actualizarState(data){
        this.setState({
            restaurant:data
        })
        
    }
    crearRestaurant(){
        // getValue()retorna un JSON con la informacion del formulario
        // Si y SOLO SI el formulario tiene los campos validados
        // en caso contratio, retorna 'null'
        const validador = this.refs.form.getValue();
        if(validador){
            const pk = firebase.database().ref().child('restaurants').push().key;
            firebase.database().ref().child('restaurants').child(pk).set({
                nombre:this.state.restaurant.nombre,
                descripcion:this.state.restaurant.descripcion,
                direccion:this.state.restaurant.direccion,
                capacidad:this.state.restaurant.capacidad,
            }).then(()=>{
                Alert.alert("Exito!","El restaurant se ha creado");

                const navigateAction = NavigationActions.navigate({
                    routeName:'RestaurantsScreen'
                });
                this.props.navigation.dispatch(navigateAction);

                // this.props.navigation.navigate('RestaurantsScreen');
            }).catch(()=>{
                Alert.alert("Error","Ocurrio un error fatal =(");
            })
        }
    }
  render() {
    return (
    
    <BackgroundImage source={require('../../../assets/images/bg2.jpg')}>
        <View style={styles.container}>
        <KeyboardAvoidingView behavior = "position">
            <Card title="Agragar un Restaurant">
                <View>
                    <Form ref="form"
                          type={Restaurant}
                          options={options}
                          value={this.state.restaurant}
                          onChange={(data)=>{this.actualizarState(data)}}>
                    </Form>
                </View>
                <AppButtons bgColor="rgba(0, 59, 101, 1)"
                            title="Agregar"
                            action={this.crearRestaurant.bind(this)}
                            iconName="plus-circle"
                            iconSize={30}
                            iconColor="#fff">

                </AppButtons>
            </Card>
        </KeyboardAvoidingView>
        </View>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(231,228,224,0.8)'
    }
})
