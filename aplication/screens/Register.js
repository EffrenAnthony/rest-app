import React, { Component } from 'react'
import BackgroundImage from '../components/BackGroundImage';
import AppButton from '../components/AppButtons';
// import {View, ToastAndroid} from 'react-native';
import {View, Alert} from 'react-native';
import {Card} from  'react-native-elements';
import t from 'tcomb-form-native';

import * as firebase from 'firebase';

const Form = t.form.Form;

export default class Register extends Component {
    validador;
    
    static navigationOptions =  {
        title: "Crea Una Cuenta"
    }


    constructor(){
        super();
        this.state = {
            user:{
                email:'',
                password:''
            }
        }
    }

    registrar(){
        valido = this.refs.form.getValue();
        if(valido){
            // crear usuario en firebase
            firebase.auth().createUserWithEmailAndPassword(
                                                            valido.email,
                                                            valido.password)
                            .then(()=>{
                                // Alert.alert("Usuario creado =)",ToastAndroid.SHORT);
                                Alert.alert("Usuario creado =)");
                            })
                            .catch((error)=>{
                                Alert.alert(error);
                            });
        }else{
            Alert.alert('Error en la introducción de los datos');
        }
    }


    onChange(evento){
        console.log(evento);
        this.setState({
            user:evento
        })
    }

    render() {
        this.validador = {
            vEmail: t.refinement(t.String,(valor)=>{
                if(/@/.test(valor)){
                    return true;
                }else{
                    return false;
                }
            }),
            vPassword: t.refinement(t.String,(valor)=>{
                if(valor.length >= 6){
                    return true;
                }else{
                    return false;
                }
            }),
            vPasswordConfirmation: t.refinement(t.String,(valor)=>{
                if(valor === this.state.user.password){
                    return true;
                }else{
                    return false;
                }
            })

        };
        var User = t.struct({
            email: this.validador.vEmail,
            password: this.validador.vPassword,
            password_confirmation: this.validador.vPasswordConfirmation
        });
        var options = {
            fields:{
                email:{
                    help:'Introduce tu Email',
                    error: 'Email Incorrecto',
                    autoCapitalize:'none',
                },
                password:{
                    help:"Introduce tu Password",
                    error:"Password Incorrecto",
                    password:true,
                    secureTextEntry:true
                },
                password_confirmation:{
                    help: "Repite tu Password",
                    error: "Los password no coinciden",
                    password: true,
                    secureTextEntry: true,
                }

            }
        };



        return (
            <BackgroundImage source={require('./../../assets/images/bg2.jpg')}>
                <View>
                    <Card wrapperStyle={{ paddingLeft: 10 }} title="Iniciar Sesión" >
                        <Form ref="form"
                            type={User}
                            options={options}
                            onChange={(evento)=>{
                                this.onChange(evento);
                            }}
                            value={this.state.user}/>
                        <AppButton bgColor="rgba(111,38,74,0.7)"
                            title="Registrarme"
                            action={this.registrar.bind(this)}
                            iconName="user-plus"
                            iconSize={30}
                            iconColor="#fff"
                            setWidth={false}/>
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}