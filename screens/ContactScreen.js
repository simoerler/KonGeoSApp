import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import * as WebBrowser from 'expo-web-browser';

class ContactScreen extends React.Component {

    render() {
        return (
            <View>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => OpenAnything.Email('kongeos2022wien@gmail.com')}>
                            <Text style={cont_styles.emailText}> E-mail: kongeos2022wien@gmail.com </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+49')}>
                            <Text style={cont_styles.nameText}> Orga-Team Notfallnummer </Text>
                            <Text style={cont_styles.numberText}> +43 677 64801701</Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/OrganisatorIn1.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('112')}>
                            <Text style={cont_styles.nameText}> Notruf </Text>
                            <Text style={cont_styles.numberText}> 144 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/ambulance-01.jpg')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+49')}>
                            <Text style={cont_styles.nameText}> Polizei </Text>
                            <Text style={cont_styles.numberText}> 133 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/OrganisatorIn2.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/kongeos2022wien/')}>
                            <Text style={cont_styles.emailText}> KonGeoS Wien Instagram </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://chat.whatsapp.com/HqLMOSuaEdv65H3dHIdzW7')}>
                            <Text style={cont_styles.emailText}> Wien WhatsApp Gruppe beitreten </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://wien22.kongeos.xyz')}>
                            <Text style={cont_styles.emailText}>KonGeoS Wien Webseite  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://kongeos.xyz')}>
                            <Text style={cont_styles.emailText}>KonGeoS Webseite  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/kongeos_dach/')}>
                            <Text style={cont_styles.emailText}> KonGeoS Instagram </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://chat.whatsapp.com/HqLMOSuaEdv65H3dHIdzW7')}>
                            <Text style={cont_styles.emailText}> KonGeoS WhatsApp Gruppe beitreten </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

export default ContactScreen;
