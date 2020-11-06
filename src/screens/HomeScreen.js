import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import { Context } from '../context/AuthContext'
import { Entypo } from '@expo/vector-icons';

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

HomeScreen.navigationOptions = {
    tabBarIcon: <Entypo name="home" size={24} color="black" />
}
const styles = StyleSheet.create({

})

export default HomeScreen