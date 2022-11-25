import React, {useEffect, useState} from 'react'
import { FlatList, RefreshControl, TextInput, StyleSheet, TouchableOpacity,Text, View} from 'react-native'
import {useIsFocused} from '@react-navigation/native'

import DateItem from './DateItem'
import { getDates , deleteDate, getDateByDate } from '../api'
import Layout from './Layout'



const DateList = () => {
    
    const [dates, setDates] = useState([]);
    const [datesByDate, setDatesByDate] = useState([]);
    const [dateToFind,setDateToFind] = useState("");
    const [isAllDates, setIsAllDates] = useState(true);
    const [refreshing, setrefreshing ] = useState([false]);
   
    const isFocused = useIsFocused();

    const loadDates = async () => {
        const data = await getDates();
        setDates(data);
        
    }

    const getSelectedDate = () => {
        for(let i = 0; i <= datesByDate.length; i++){datesByDate.pop();}
        setIsAllDates(false);
        
        console.log(dates)
        dates.map((item) => {
            if (item.nombre == dateToFind) {
                datesByDate.push(item);
            }
        })
    }

    const handleDatesShow = () => {
    }
    useEffect(() => {
        loadDates();
    }, [isFocused, isAllDates]);


    const handleDelete = async (id) => {
        await deleteDate(id);
        await loadDates();
    }

    const renderItem = ({ item }) => {
        return <DateItem date={item} handleDelete={handleDelete}/>
    }




    const refresh = React.useCallback(async () =>{
        setrefreshing([true]);
        await loadDates();
        setrefreshing([false]);
        
    })

    
    return (
    <View style={{width: '100%',height: '100%'}}>
        <TextInput
            style={styles.input}
            placeholder = 'Fecha de datos'
            placeholderTextColor = 'grey'
            onChangeText={(text) => {setDateToFind(text)}}
        />
        <View style={styles.showAllButtons}>
        <TouchableOpacity style={styles.findButton} onPress={() => {getSelectedDate()}}>
            <Text style={ styles.textButton }>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findButton} onPress={() => {setIsAllDates(true)}}>
            <Text style={ styles.textButton }>Todas</Text>
        </TouchableOpacity>
        </View>
        {
            !isAllDates ?(
                <FlatList
                styles={{width: '100%',height: '100%'}}
                    data={datesByDate}
                    keyExtractor={(item) => item.id_producto + ''}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                            onRefresh={refresh}
                        />
                    }
                />
            ) :  (
                <FlatList 
            style={{width: '100%'}}
                data={dates}
                keyExtractor={(item) => item.id_producto + ''}
                renderItem={renderItem}
                refreshControl={
                <RefreshControl
                    onRefresh={refresh}
                />
            }
        />
            ) 
            
        }
        
    </View>
    )
}


const styles = StyleSheet.create({
    input:{
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
    findButton:{
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'green',
    },
    textButton:{
        color: 'white',
        textAlign: 'center',
    },
    showAllButtons:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})
export default DateList