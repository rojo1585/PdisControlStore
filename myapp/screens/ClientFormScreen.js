import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';


import Layout from '../components/Layout'
import {addNewUser, updateClient , getUserByID} from '../api'


const ClientFormScreen = ({ navigation, route }) => {


    const [client, setClient] = useState({
        nombre: ' ',
        email: ' ',
        rol: 'cliente',
        direccion: ' ',
        tel: ' ',
    });

    const [updating, setUpdating] = useState(false);

    
    const handleChange = (name, value) => setClient({...client, [name]: value})

    const handleSubmit = async () => {
        try {
            if (!updating) {
                await addNewUser(client);    
            }else{
                await updateClient(route.params.id,client);
            }
            navigation.navigate("MainScreen")
        } catch(error){
            console.log(error)
        }
        
    }
    
    useEffect(() => {
        if (route.params && route.params.id){
            setUpdating(true);
            navigation.setOptions({headerTitle: 'Update a date'});
            (async () => {
                const data = await getUserByID(route.params.id);
                setClient({nombre: data[0].nombre, email: data[0].email, rol: data[0].rol, direccion: data[0].direccion, tel: data[0].tel});
            })();
        }      
    }, [])


    return (
    <Layout>
        <Text style={styles.textButton}>Nombre</Text>
        <TextInput style={ styles.input }
        placeholder='nombre'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('nombre', text) }
        value={client.nombre}
        />
        <Text style={styles.textButton}>Email</Text>
        <TextInput style={ styles.input }
        placeholder='Email'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('email', text) }
        value={client.email}
        />
        <Text style={styles.textButton}>Direccion</Text>
        <TextInput style={ styles.input } 
        placeholder='direccion'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('direccion', text) }
        value={client.direccion}
        />
        <Text style={styles.textButton}>Telefono</Text>
        <TextInput style={ styles.input } 
        placeholder='telefono'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('tel', text) }
        value={client.tel}
        />


        {
            !updating ? (
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Save</Text>
                    </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.updateButton} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Update</Text>
                    </TouchableOpacity>
            )
        }


        
    </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        fontSize: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        padding: 5,
        borderRadius:10
    },
    saveButton: {
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'green',
        
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    },
    updateButton: {
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
})
export default ClientFormScreen