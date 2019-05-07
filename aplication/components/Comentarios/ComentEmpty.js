import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ComentEmpty extends Component {
  render() {
    return (
      <View style={styles.commentView}>
        <Text style={styles.commentText}>
            No hay comentarios, se el primero en opinar :) </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    commentView:{
        flex:1,
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        textAlign:'center',
        fontWeight:'bold'
    },
    commentText:{
        backgroundColor:'rgba(5,150,255,0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }
})
