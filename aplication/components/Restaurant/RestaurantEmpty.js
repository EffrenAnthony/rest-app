import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class RestaurantEmpty extends Component {
  render() {
    return (
      <View style={styles.restaurantEmptView}>
          <Text style={styles.restaurantEmptText}>
              No hay restaurants disponibles
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    restaurantEmptView:{
        justifyContent: 'center',
        flex:1,
        marginTop:10,
        marginBottom:10,
    },
    restaurantEmptText:{
        backgroundColor:'rgba(10,120,222,0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }
})