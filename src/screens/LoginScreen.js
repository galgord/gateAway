import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text> LoginScreen </Text>
            <Button
                title="Go To Register"
                onPress={() => { navigation.navigate('register') }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default LoginScreen