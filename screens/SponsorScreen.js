import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import * as WebBrowser from 'expo-web-browser';

class SponsorScreen extends React.Component {

    render() {
        return (
            <View>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.whiteBigContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://wien22.kongeos.xyz')}>
                            <Text style={cont_styles.emailText}>Sponsor xyz </Text>
                            <Image
                                    source={require('../assets/images/OrganisatorIn1.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://wien22.kongeos.xyz')}>
                            <Text style={cont_styles.emailText}>Sponsor abc </Text>
                            <Image
                                    source={require('../assets/images/OrganisatorIn2.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

export default SponsorScreen;
