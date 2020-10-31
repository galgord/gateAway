import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'

const HomeScreen = () => {
    const { signoutUser } = useContext(Context)

    return (
        <SafeAreaView>
            <Text> HomeScreen </Text>
            <Button
                title="Signout"
                onPress={signoutUser}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})

export default HomeScreen