import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext'

const RegisterScreen = ({ navigation }) => {
    const { state: { errorMessage }, register } = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.container}>
            <AuthForm
                headerText="Please Register Below!"
                errorMessage={errorMessage}

                Button1Text="Register"
                Button1Action={register}

                Button2Text="Cancel"
                Button2Action={() => { navigation.navigate('login') }}
            />
        </SafeAreaView>
    )
}
RegisterScreen.navigationOptions = () => {
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

export default RegisterScreen