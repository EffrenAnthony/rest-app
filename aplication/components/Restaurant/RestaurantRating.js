import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Rating} from 'react-native-elements';
import {View,Text} from 'react-native';

export default class RestaurantRating extends Component {
    refComentarios;
    constructor(props){
        super(props);
        const restaurantId = props.restaurantId;
        this.refComentarios = firebase.database().ref()
                                .child(`comentarios/${restaurantId}`);                 
        this.state = {
            promedio: 0
        }
    }

    componentDidMount(){
        let promedio = 0;
        let i = 0;
        this.refComentarios.on('value',data=>{
            data.forEach(fila=>{
                // console.log(fila.val().rating);
                promedio += fila.val().rating;
                i++;
                
            });
            promedio = promedio/i;
            // si el promedio NO ES UN NUMERO           
                 console.log(`prmedio = ${promedio}`);

            if(Number.isNaN(promedio)){
                this.setState({
                    promedio:-1
                })
            }else{
                this.setState({
                    promedio: promedio
                
                })                
            }
        })

        
    }
    
    render() {
        let promedio = this.state.promedio;
        if(promedio != -1){
            return (
                <View>
                    <Rating ref="rating"
                            imageSize={20}
                            readonly
                            startingValue={this.state.promedio}>
                    </Rating>
                </View>
            )            
        }else{
            return (
                <View>
                    <Text style={{flex:1,textAlign:'center',fontWeight:'bold'}}>5-MENTARIOS</Text>
                </View>
            )
        }
    }
}