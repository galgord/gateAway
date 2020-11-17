import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, Button1Text, Button1Action, Button2Text, Button2Action }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3> {headerText} </Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title={Button1Text}
                    onPress={() => Button1Action({ email, password })}
                />
                <Button
                    title={Button2Text}
                    onPress={Button2Action}
                />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
})

export default AuthForm
