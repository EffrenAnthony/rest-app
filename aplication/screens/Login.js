import React, { Component } from 'react'
import t from 'tcomb-form-native';
import BackgroundImage from '../components/BackGroundImage';
import {View, Alert} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../components/AppButtons';
const Form = t.form.Form;

import * as firebase from 'firebase';


export default class Login extends Component {

    validador;

    static navigationOptions =  {
        title: "Iniciar Sesion"
    }

    iniciarSesion(){
        const valido = this.refs.form.getValue();
        if(valido){
            firebase.auth()
                    .signInWithEmailAndPassword(valido.email,valido.password)
                    .then(()=>{
                        Alert.alert("Éxito","Usuario correcto!")
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
        }else{
            console.log("error invalido");
        }
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
            })
        };


        var User = t.struct({
            email: this.validador.vEmail,
            password: this.validador.vPassword,
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
                }
            }
        };
        return (
            <BackgroundImage source={require("./../../assets/images/bg2.jpg")}>
                <View>
                    <Card wrapperStyle={{paddingLeft:10}} title="Iniciar Sesión" >
                        <Form ref="form"
                                type={User}
                                options={options}/>
                        <AppButton bgColor="rgba(111,38,74,0.7)"
                                    title="Login"
                                    action={this.iniciarSesion.bind(this)}
                                    iconName="sign-in"
                                    iconSize={30}
                                    iconColor="#fff"
                                    setWidth={false}
                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}
