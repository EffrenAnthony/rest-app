import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native';

export default class AppButtons extends Component{
    render(){

        const {title,iconName,iconColor, 
               bgColor,action,iconSize,
               setWidth
            } = this.props;
        
        const {width} = setWidth ? Dimensions.get('window') : {};

        let estilo = {
            backgroundColor: bgColor,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 5,
            width: width

        }
        return (
            <Button onPress = {action}
                    iconRight = {true}
                    title = {title}
                    icon = {<Icon name = {iconName}
                                  size={iconSize}
                                  color={iconColor}
                                  >                                
                            </Icon>}
                    buttonStyle = {estilo}
                    // text = "Texto"
                    // action = {()=>{console.log((1));}}
                    // icon={<Icon name="sign-in"
                    //             size={30}
                    //             color="#fff">
                    //             </Icon>}
                    >
            </Button>

        )
    }
}