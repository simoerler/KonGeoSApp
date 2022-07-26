import React from 'react';
import {StatusBar, View} from 'react-native';
import Program from '../components/Program/Program';

const ProgramScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View>
                <Program navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default ProgramScreen;
