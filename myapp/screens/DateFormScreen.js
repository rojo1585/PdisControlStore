import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';


import Layout from '../components/Layout'
import { saveDate, getDateByID, updateDate } from '../api'

const DateFormScreen = ({ navigation, route }) => {


    const [date, setDate] = useState({
        id_tienda: ' ',
        nombre: ' ',
        descripcion: ' ',
        cnatidad: ' ',
        precio_costo: ' ',
        precio_venta: ' ',
        Images: ' '
    });
    //const [selectedDate, setSelectedDate] = useState('');
    //const [time, setTime] = useState('');

    const [updating, setUpdating] = useState(false);

    
    const handleChange = (name, value) => setDate({...date, [name]: value})

    /*const remplaceCharactersToDate = (obj) =>{
        const a  = obj.fecha.replace('/','-');
        console.log(a);
        const b = a.replace('/','-');
        return b
    }*/

    const handleSubmit = async () => {
        try {
            if (!updating) {
                //date.fecha = selectedDate;
                //date.fecha = remplaceCharactersToDate(date);
                //console.log(date.fecha);
                await saveDate(date);    
            }else{
                await updateDate(route.params.id, date);
            }
            //console.log(time);
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
                const data = await getDateByID(route.params.id);
                setDate({id_tienda: data[0].id_tienda, nombre: data[0].nombre, descripcion: data[0].descripcion, cantidad: data[0].cantidad, precio_costo: data[0].precio_costo, precio_venta: data[0].precio_venta});
            })();
        }       
    }, [])


    return (
    <Layout>
        <TextInput style={ styles.input }
        placeholder='id_tienda'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('id_tienda', text) }
        value={date.id_tienda}
        />
        <TextInput style={ styles.input }
        placeholder='Nombre'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('nombre', text) }
        value={date.nombre}
        />
        <TextInput style={ styles.input } 
        placeholder='Descripcion'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('descripcion', text) }
        value={date.descripcion}
        />
        <TextInput style={ styles.input } 
        placeholder='cantidad'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('cantidad', text) }
        value={date.cantidad}
        />
        <TextInput style={ styles.input } 
        placeholder='precio_costo'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('precio_costo', text) }
        value={date.precio_costo}
        />
        <TextInput style={ styles.input } 
        placeholder='precio_venta'
        placeholderTextColor='grey'
        onChangeText={ (text) => handleChange('precio_venta', text) }
        value={date.precio_venta}
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
export default DateFormScreen