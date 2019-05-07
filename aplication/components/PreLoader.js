import React, {Component} from 'react';
import { View, ActivityIndicator,
        StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
export default class PreLoader extends Component{
    render(){
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" style={{height:80}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    preloader: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:height,
        backgroundColor:'#242935'
    }
});