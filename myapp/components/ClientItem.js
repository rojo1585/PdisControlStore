import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'


const ClientItem = ({ client, handleDelete}) => {

    const navigation = useNavigation();

    return (

    <View style={ styles.itemContainer }>
        <TouchableOpacity onPress={ () => navigation.navigate('ClientFormScreen', {id: client.id})}>
            <Text style={styles.imtemsTitle}>nombre: {client.nombre}</Text>
            <Text style={styles.imtemsTitle}>direccion: {client.direccion}</Text>
            <Text style={styles.imtemsTitle}>telefono: {client.tel}</Text>
            <Text style={styles.imtemsTitle}>email: {client.email}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleDelete(client.id)}
        >
            <Text style={styles.deleteTextButton}>Delete</Text>
        </TouchableOpacity>
        
    </View>

    
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#40576B',
        padding: 20,
        marginVertical: 3,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    imtemsTitle:{
        color:'white',
    },
    deleteButton: {
        backgroundColor:'#D44343',
        borderRadius: 6,
        padding: 2
    },
    deleteTextButton: {
        color:'black',
        
    },
})

export default ClientItem