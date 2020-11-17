import React, { useContext } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Text, Button, ListItem } from 'react-native-elements'
import { Context as GateContext } from '../context/GateContext'
import { Entypo } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

const HomeScreen = () => {
    const { getData, state } = useContext(GateContext)
    return (
        <SafeAreaView>
            <NavigationEvents onWillFocus={getData} />
            <Text> HomeScreen </Text>
            <Button
                title="Call Gate"
                onPress={() => { console.log(Object.values(state)) }}
            />
            {state ? <FlatList
                data={Object.values(state)}
                keyExtractor={item => item.phone}
                renderItem={
                    ({ item }) => {
                        return <TouchableOpacity onPress={() =>
                            navigation.navigate('home', { _id: item.name })
                        }>
                            <ListItem
                                chevron
                                title={item.name}
                            />
                        </TouchableOpacity>
                    }
                }
            />
                : <Text>No Gates</Text>}
        </SafeAreaView>
    )
}

/*
{location: {…}, name: "test4", phone: 123}
location:
lat: 23444
long: 124443
__proto__: Object
name: "test4"
phone: 123
__proto__: Object
*/

HomeScreen.navigationOptions = {
    tabBarIcon: <Entypo name="home" size={24} color="black" />
}
const styles = StyleSheet.create({

})

export default HomeScreen