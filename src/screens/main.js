import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; //must import stuff

export default class Main extends Component {
    render () {
        return(
            <View style={{
                //styles.wrapper,
                backgroundColor: '#ecf0f1', //clouds color
                flex: 1,
                justifyContent: 'center', //content (text) is centered vertically
                alignItems: 'center', //align content horizontally
                //styling the text elements
            }}>
                <View style={{
                    //alignItems: 'bottom',
                    //backgroundColor: 'whitesmoke', //use different background color to see size
                    flex: 0.83,
                    //justifyContent: ''
                }}>
                    <Text style={{
                        //inside of a view inside of a main view
                        //color: 'black',
                        fontSize: 27,
                        fontWeight: 'bold',
                        //style text too
                    }}>
                        Enter your birthday!
                    </Text>
                </View>

                <View style={{
                    //backgroundColor: 'blue'
                    

                }}>
                    <Text style={{
                        color: 'grey',
                        fontWeight: '100',
                        fontSize: 17,
                        
                    }}> 
                        It might be your birthday... 
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        //backgroundColor: 'blue',
        //make things cleaner by storing styles in object
    }
}