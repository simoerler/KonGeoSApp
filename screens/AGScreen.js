import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import * as WebBrowser from 'expo-web-browser';

class AGScreen extends React.Component {

    render() {
        return (
            <View>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Nachwuchs </Text>
                            <Text style={cont_styles.numberText}> Hier stehen Infos über die AG. und noch mehr und viel viel mehr und noch mehr und viel viel mehr
                            und noch mehr und viel viel mehrund noch mehr und viel viel mehr</Text> 
                            <Text style={cont_styles.numberText}>ein Absatz ist auch dabei, nicht so toll </Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG PR </Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Studium und Lehre </Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Vereine und Verbände </Text>
                    </View>
                    

                </View>
            </View>
        )
    }
}

export default AGScreen;
