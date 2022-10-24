import React from 'react';
import {StatusBar,ScrollView, Text, View} from 'react-native';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';

class PresentationsScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Stadt Wien </Text>
                            <Text style={cont_styles.numberText}> Die Stadtvermessung (MA 41) unterstützt die Stadt Wien mittels modernen Datenerfassungsmethoden, 3D Modellierungen und Analyseverfahren bei der Digitalisierung und Analyse des öffentlichen Raumes mit Vermessungen und 3D Geodaten.
</Text> 
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Wiener Linien - U2U5 Center </Text>
                            <Text style={cont_styles.numberText}> Das Infocenter U2xU5 ist eine interaktive Ausstellung über die Welt des U-Bahn-Baus.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Wanderung zum Hermannskogel </Text>
                            <Text style={cont_styles.numberText}>Der Hermannskogel ist mit 542 m ü. A. der höchste Punkt des Gemeindegebiets von Wien und dient als Fundamentalpunkt.
</Text>
                    </View>
             
                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Rail Tec Arsenal - Klima-Wind-Kanal </Text>
                            <Text style={cont_styles.numberText}>Der Klima-Wind-Kanal Wien von Rail Tech Arsenal bietet die Möglichkeit, Wettereinflüsse auf Fahrzeuge und Komponenten unter realistischen Betriebsbedingungen zu untersuchen. 
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Wasserleitungsmuseum </Text>
                            <Text style={cont_styles.numberText}>Eine Museumsführung im Wasserleitungsmuseum Kaiserbrunn zeigt, welche Leistungen hinter der Bereitstellung von Trinkwasser für die Stadt Wien stehen.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Strabag - U-Bahn Baustellenbegehung </Text>
                            <Text style={cont_styles.numberText}>Die U5 wird nach Fertigstellung der ersten Baustufe ab 2026 die bestehenden U2-Stationen Karlsplatz, Museumsquartier, Volkstheater und Rathaus übernehmen und bis zum Frankhplatz, im Universitätsviertel, fahren.
</Text>
                    </View>
                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Atominstitut der TU Wien </Text>
                            <Text style={cont_styles.numberText}>Das Atominstitut, früher Atominstitut der österreichischen Universitäten, ist ein Institut der Fakultät für Physik der TU Wien. Mit seinem 1962 in Betrieb genommenen Forschungsreaktor TRIGA Mark II ist es heute die einzige in Österreich verbliebene Einrichtung, die über einen laufenden Kernspaltungsreaktor verfügt.
</Text>
                    </View>
                    
                    
            
        
                </View>
            </ScrollView>
        )
    }
}

export default PresentationsScreen;
