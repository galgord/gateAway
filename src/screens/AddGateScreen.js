import React, { useContext } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Card, Input } from 'react-native-elements'
import { Context as GateContext } from '../context/GateContext';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



const AddGateScreen = () => {
    const { sendData } = useContext(GateContext);
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Card
                containerStyle={styles.card}
            >
                <Card.Title style={styles.title}>Add Gate</Card.Title>
                <Input
                    placeholder="Name.."
                    inputContainerStyle={styles.input}
                />
                <Input
                    placeholder="Phone Number.."
                    inputContainerStyle={styles.input}
                />
                <Input
                    placeholder="Location..."
                    inputContainerStyle={styles.input}
                />
                <Input
                    placeholder="Description.."
                    inputContainerStyle={styles.input}
                />
                <TouchableOpacity
                    onPress={() => sendData("test4", 123, { lat: 23444, long: 124443 })}
                    style={styles.button}
                >
                    <LinearGradient
                        colors={['#137D8B', '#189FB2']}
                        style={{ padding: 15, alignItems: 'center', borderRadius: 10 }}
                    >
                        <Text style={styles.buttonText}>ADD</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Card>
        </SafeAreaView>
    )
}

AddGateScreen.navigationOptions = {
    tabBarIcon: <AntDesign name="plus" size={24} color="black" />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20D8F0',
        alignItems: 'center'
    },
    card: {
        flexDirection: 'column',
        flex: 1,
        borderRadius: 20,
        alignSelf: 'stretch',
        alignContent: 'space-between',
    },
    logo: {
        height: 170,
        width: 140,

    },
    title: {
        color: '#0D5B65',
        borderStyle: 'solid',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 4,
        fontSize: 24

    },
    button: {
        bottom: 0,
    },

    buttonText: {
        color: 'white',
        lineHeight: 24,
        fontWeight: "800",
        fontSize: 24
    },
    input: {
        borderColor: '#0D5B65',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    }

})

export default AddGateScreen