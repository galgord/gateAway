import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'


const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text> RegisterScreen </Text>
            <Button
                title="Go To Main Screen"
                onPress={() => { navigation.navigate('mainFlow') }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default RegisterScreen