import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native'; //must import stuff
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'; //for calander component
//import { createStore } from "redux"; //redux import


let date = new Date();
let dayt = date.getDate(); //get date
let montht = date.getMonth()+1;
console.log("Current day: " + dayt, "Current month number: " + montht)

export default class Main extends Component {
    render () {
        return(
            <View style={{
                //styles.wrapper,
                backgroundColor: '#ecf0f1', //clouds color
                flex: 1,
                flexDirection: 'column', //stack things verically
                justifyContent: 'space-around', //content (text) is centered vertically
                alignItems: 'center', //align content horizontally
                //styling the text elements
            }}>
                <View style={{
                    //alignItems: 'bottom',
                    //backgroundColor: 'whitesmoke', //use different background color to see size
                    //flex: 0.21,
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
                    //backgroundColor: 'whitesmoke',
                    flex: 0.50,
                    justifyContent: 'center',
                }}>

                <Calendar 
                style={{
                    borderWidth: 3,
                    borderColor: 'whitesmoke',
                    //height: 100,
                    }}

                    // Initially visible month. Default = Date()
                    current={'2003-08-06'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('The selected dasy info is:', day)
                    let days = day.day
                    //console.log(day)
                    let month = day.month
                    //console.log(month) // why is month underfined?
                        if (dayt === days && montht === month) {
                            Alert.alert('TODAY IS YOUR BIRTHDAY!!', 'Please exept these automated birthday congradulations!', [{text: 'Thanks!'}]);
                        } else {
                            Alert.alert('Today is not your birthday', 'Please try again tommorow', [{text: 'Fine...'}]);
                        }
                        
                        }}
                    //on press make if birthday alert
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    //onMonthChange={(month) => {console.log('month changed', month)}}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    //renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    
                />

                </View>

                <View style={{
                    //backgroundColor: 'blue'
                    

                }}>
                    <Text style={{
                        color: 'grey',
                        fontWeight: '100',
                        fontSize: 13,
                        //flex: 0.3
                        
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
        // pass the styles like styles.wrapper
    }
}