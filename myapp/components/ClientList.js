import React, {useEffect, useState} from 'react'
import { FlatList, RefreshControl, TextInput, StyleSheet, TouchableOpacity,Text, View} from 'react-native'
import {useIsFocused} from '@react-navigation/native'

import ClientItem from './ClientItem'
import { deleteClient, get, getAllUsers} from '../api'
import Layout from './Layout'

const ClientList = () => {
    const [clientData,setClientedData] = useState([]);
    const [refreshing,setrefreshing] = useState([false]);

    const isFocused = useIsFocused();
    
    const loadClients= async () => {
        const data = await getAllUsers();
        setClientedData(data);
        console.log(data);
    }

    const handleDelete = async (id) => {
        await deleteClient(id);
        await loadClients();
    }

    useEffect(() => {
        loadClients();
    }, [isFocused]);

    const renderItem = ({ item }) => {
        return <ClientItem client={item} handleDelete={handleDelete}/>
    }

    const refresh = React.useCallback(async () =>{
        setrefreshing([true]);
        await loadDates();
        setrefreshing([false]);
        
    })

    return (
        <FlatList
        styles={{width: '100%',height: '100%'}}
            data={clientData}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    onRefresh={refresh}
                />
            }
        />
    )
}

export default ClientList