import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext'

const LoginScreen = () => {
    const { state: { errorMessage }, signin } = useContext(Context)
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Hi Welcome to GateAway! Get Sign in!"
                errorMessage={errorMessage}
                onSubmit={signin}
                submitButtonText="Login"
            />
        </View>
    )
}
LoginScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 2.81

    }
})

export default LoginScreen