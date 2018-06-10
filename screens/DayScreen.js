import React, {Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView
}from 'react-native'
import {Icon} from 'react-native-elements';
import nav_style from '../components/nav_style';
import * as firebase from 'firebase';
import ApiKeys from '../ApiKeys'
import styles from '../components/styles';

class DayScreen extends Component {
    constructor() {
        super();
        this.state = {
            message: ' ',
            weekDays: {}
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const weekDaysRef = rootRef.child('weekDays');

        weekDaysRef.once('value', snap => {
            let newStateWeekDays = [];
            snap.forEach(child => {     //child - dzien tyg
                let events = child.val();
                let weekDay = child.key
                let newEvent = {}
                Object.keys(events).map((key) => {
                    let event = events[key]
                    newEvent[key] = event
                })

                let lastState = this.state.weekDays

                lastState[weekDay] = newEvent
                let newState = lastState
                this.setState({
                    weekDays: newState
                })
            })
        })
        

    
    }

    render(){
        return(
            <View>
                <View style={{height:'83%'}}>

                 <View >
                 <ScrollView>
                    {Object.keys(this.state.weekDays).map((dayNameKey) => {
                        let dayEvents = this.state.weekDays[dayNameKey]
                        return (
                            
                            
                            <View style={styles.firstContainer}> 
                            
                            
                                {Object.keys(dayEvents).map((eventName) => {
                                    let eventData = dayEvents[eventName]
                                    return (
                                        
                                        <TouchableOpacity  onPress={() => 
                                            this.props.navigation.navigate('Activity')}>
                                        <View style={styles.timetable_Container}>
                                            <Text style={styles.eventText}> {eventName} </Text>
                                            <Text  style={styles.timeText}> {eventData.startTime} - {eventData.endTime} </Text>
                                            <Text style={styles.placeText}> {eventData.place} </Text>
                                        </View>
                                        </TouchableOpacity>
                                        
                                    )
                                })}
                                
                            </View>
                            

                        )
                    })}
</ScrollView>
            </View>  
            </View>  
                

            <View style={{top: '5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}} >Home</Text>
                </TouchableOpacity>
            </View>
            

            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                <Icon 
                    name='marker' 
                    type='foundation'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color: '#1D3557', textAlign: 'center'}}>Map</Text>
                </TouchableOpacity>
            </View>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color='#cc0033'
                    size={36}/>
                <Text style={{fontSize: 10, color: '#cc0033', textAlign: 'center'}}>Timetable</Text>
                </TouchableOpacity>
            </View>
        
            </View>
            </View>

            
        )
    }
};

//module.export = MondayScreen;
export default DayScreen;