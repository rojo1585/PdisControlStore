import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
//import { auth/*GoogleAuthProvider*/ } from './db/firebase'
import { auth } from '../db/firebase'
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { addNewUser } from '../api';


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [cliente, setCliente] = useState({
        email: '',
        password: '',
        rol: 'cliente'
    });

    const navigation = useNavigation()

    const handleUser = async () =>{
        await addNewUser(cliente);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.navigate('MainScreen')
            }
        })

        return unsubscribe
    }, [])

    const setSignUpWhitEmail = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
            cliente.email = email;
            cliente.password = password;
            setCliente(cliente)
            handleUser()
            console.log('Registro exitoso',user.email);
            
        })
        .catch(error => alert(error.message))
    }

    const setLoginWhitEmail= () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log('Iniciaste secion');
        })
        .catch(error => alert(error.message))

    }

    /*const setLoginWhitGoogle = () =>{
        let provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
            .then(result =>{
                console.log("gogole")
            })
            .catch(error => {
                console.log(error)
            })
    }*/

    return (
        
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding   ">

            <View style={styles.Title}>
                <Text style={styles.LoginText}>Inicio de sesión</Text>
            </View>
            <View style={styles.Title}>
                <Text style={styles.LoginTextWhitMargin}>Rojito.inc</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text) }
                style={styles.input}
                />
                <TextInput 
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={setLoginWhitEmail}
                style={styles.button}>
                    <Text style={styles.buttonText}>
                        Inicia
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={setSignUpWhitEmail}
                style={[styles.button]}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        color: 'white',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonColorSingUpGoogle: {
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,

    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonTextGoogle: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    LoginText: {
        color: 'red',
        marginTop:10,
        fontSize:30,
        fontWeight:'bold',
    },
    LoginTextWhitMargin: {
        color: 'red',
        marginTop:10,
        fontSize:30,
        fontWeight:'bold',
        marginBottom: 100,
        
    },
})