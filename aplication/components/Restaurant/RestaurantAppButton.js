import React, { Component } from 'react'
import AppButton from './../AppButtons'
import { Text, View, StyleSheet } from 'react-native'

export default class RestaurantAppButton extends Component {
  render() {

    const {miFuncion} = this.props;
    return (
      <View style = {styles.buttonContainer}>
          <AppButton bgColor="rgba(255,38,74,0.7)"
                        iconName="plus-circle"
                        title="Añadir Restaurant"
                        iconSize={30}
                        iconColor="#fff"                       
                        setWidth={true}
                        action={miFuncion}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    }
});
