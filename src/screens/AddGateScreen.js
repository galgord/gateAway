import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import { Context as GateContext } from '../context/GateContext';
import { AntDesign } from '@expo/vector-icons';

const AddGateScreen = () => {
    const { sendData } = useContext(GateContext);
    return (
        <SafeAreaView>
            <Text> AddGateScreen </Text>
            <Button
                title="Test"
                onPress={() => sendData("test4", 123, { lat: 23444, long: 124443 })}
            />
        </SafeAreaView>
    )
}

AddGateScreen.navigationOptions = {
    tabBarIcon: <AntDesign name="plus" size={24} color="black" />
}


const styles = StyleSheet.create({

})

export default AddGateScreen