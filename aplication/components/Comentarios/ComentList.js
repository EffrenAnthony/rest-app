import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'
import PreLoader from '../PreLoader';
import ComentEmpty from './ComentEmpty';

export default class ComentList extends Component {
    refComentarios;
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
            comentarios:[]
        }
        let restaurantId = props.restaurantId
        this.refComentarios = firebase.database().ref()
                                .child(`comentarios/${restaurantId}`)
    }

    componentDidMount(){
        this.refComentarios.on('value',data=>{
            let comentarioTmp = []
            data.forEach(fila=>{
                let objComentario = {
                    id: fila.key,
                    comentario: fila.val().comentario,
                    rating: fila.val().rating,
                };
                comentarioTmp.push(objComentario);
            });
            this.setState({
                loaded:true,
                comentarios:comentarioTmp
            })
        })
    }
  render() {
    const {loaded,comentarios} = this.state;
    if(!loaded){
       return (<PreLoader></PreLoader>)
    }
    if(comentarios.length === 0){
        return (<ComentEmpty></ComentEmpty>)
    }else{
        // TODO MOSTRAR FLATLIST
        return (<Text style={{flex:1,textAlign:'center',
                              fontWeight:'bold', 
                              color:'white',
                              backgroundColor:'rgba(5,150,255,0.8)'}}>
                        Si hay comentarios
                </Text>)
    }
  }
}
