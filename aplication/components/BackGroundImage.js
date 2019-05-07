// rnc ---> shortcut
import React, { Component } from 'react'
import {ImageBackground} from 'react-native'


export default class BackGroundImage extends Component {
  render() {
    const {source, children} = this.props;
    return (
      <ImageBackground source={source}
                       style = {{flex:1}}>
        {children}
      </ImageBackground>
    )
  }
}

