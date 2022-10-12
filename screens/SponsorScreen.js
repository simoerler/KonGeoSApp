import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import * as WebBrowser from 'expo-web-browser';

class SponsorScreen extends React.Component {
    
    render() {
        return (
          <View style={styles.container}>
            <Text style={cont_styles.nameText}> Platin Sponsoren </Text>
             {
              <ScrollView
               style={styles.ImageContainer}
               contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
               }}
               horizontal={false}>
                
                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.ovg.at/de/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/ovg.jpg')}
                        style={{width: 110, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding:5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://strabag.com/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/strabag.jpg')}
                        style={{width: 110, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.rmdatagroup.com/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/rm.jpg')}
                        style={{width: 110, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>
               </ScrollView>
              }
            
            <Text style={cont_styles.nameText}> Gold Sponsoren </Text>
             {
              <ScrollView
               style={styles.ImageContainer}
               contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
               }}
               horizontal={false}>
                <View style={{padding:5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.kopa.at/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/kopa.jpg')}
                        style={{width: 100, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://leica-geosystems.com/de-de/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/hexleica.jpg')}
                        style={{width: 180, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding: 5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.bkg.bund.de/DE/Home/home.html')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/bkg.jpg')}
                        style={{width: 200, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              }
              <Text style={cont_styles.nameText}> Silber Sponsoren </Text>
             {
              <ScrollView
               style={styles.ImageContainer}
               contentContainerStyle={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
               }}
               horizontal={false}>

                <View style={{padding:5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.eposa.at/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/eposa.jpg')}
                        style={{width: 100, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding:5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.schubert.at/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/schubert.jpg')}
                        style={{width: 100, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>

                <View style={{padding:5}}>
                  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.terragon.at/')}>
                    <Image 
                        source={require('../assets/images/Sponsoren/terragon.jpg')}
                        style={{width: 100, height: 100, resizeMode:"center"}}/>
                  </TouchableOpacity>
                </View>
              </ScrollView>}
          </View>
        )
    }
}

export default SponsorScreen;
