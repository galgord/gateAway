import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext'

const LoginScreen = ({ navigation }) => {

    const { state: { errorMessage }, signIn } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <AuthForm
                headerText="Please Sign in Below"
                errorMessage={errorMessage}

                Button1Text="Sign In"
                Button1Action={signIn}

                Button2Text="Register"
                Button2Action={() => { navigation.navigate('register') }}
            />
        </SafeAreaView>
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