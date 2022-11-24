
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'


const DateItem = ({ date, handleDelete }) => {

    const navigation = useNavigation();

    return (

    <View style={ styles.itemContainer }>
        <TouchableOpacity onPress={ () => navigation.navigate('DateFormScreen', {id: date.id_producto})}>
            <Text style={styles.imtemsTitle}>nombre {date.nombre}</Text>
            <Text style={styles.imtemsTitle}>{date.descripcion}</Text>
            <Text style={styles.imtemsTitle}>{date.cantidad}</Text>
            <Text style={styles.imtemsTitle}>{date.precio_costo}</Text>
            <Text style={styles.imtemsTitle}>{date.precio_venta}</Text>
            <Text style={styles.imtemsTitle}>{date.imagen}</Text>
            
            
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleDelete(date.id_producto)}
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

export default DateItem