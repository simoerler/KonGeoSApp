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
                        <TouchableOpacity onPress={() => OpenAnything.Email('vorstand@kongeos.de')}>
                            <Text style={cont_styles.emailText}> E-mail: vorstand@kongeos.de </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+49')}>
                            <Text style={cont_styles.nameText}> Lena </Text>
                            <Text style={cont_styles.numberText}> +49 xxx </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/OrganisatorIn1.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+49')}>
                            <Text style={cont_styles.nameText}> Orga 2 </Text>
                            <Text style={cont_styles.numberText}> +49 xxx </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/OrganisatorIn2.png')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('112')}>
                            <Text style={cont_styles.nameText}> Notruf </Text>
                            <Text style={cont_styles.numberText}> 112 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/ambulance-01.jpg')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://https://www.facebook.com/igsmhannover2021/')}>
                            <Text style={cont_styles.emailText}> Our Facebook Page!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/igsmhannover2021/')}>
                            <Text style={cont_styles.emailText}> Visit Our Instagram!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://chat.whatsapp.com/CPsAboqS4N29dpDxalfZ6z')}>
                            <Text style={cont_styles.emailText}>Join our WhatsApp Group! </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://1drv.ms/b/s!AkDtiNeUNXnNnzfsdyckio7cYWGj')}>
                            <Text style={cont_styles.emailText}>Privacy policy</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

export default ContactScreen;
