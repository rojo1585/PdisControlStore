import { useNavigation} from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../db/firebase'
import DateFormScreen from './DateFormScreen'
import { getUser} from '../api'
import Layout from '../components/Layout'




const MainScreen = () => {

   

    const [isAdmin, setIsAdmin] = useState(false);
    
  
    const navigation = useNavigation();

    const userDataCharge = (name, value) => setUser({...user, [name]: value})
    
    const loadUser = async () =>{
      const data = await getUser(auth.currentUser?.email);
      if (data.length > 0) {
        if(data[0].rol === 'admin'){
          setIsAdmin(true);
        }
      }else{
        setIsAdmin(false);
      }
    }

    useEffect(() => {
      loadUser();
    },[isAdmin])


    const getSignOut = () => {
      auth
      .signOut()
      .then(() => {
          navigation.navigate('LoginScreen')
      })
      .catch(error => alert(error.message))
    }

    return (
      <Layout>
          <TouchableOpacity style={styles.buttonMakeDate} onPress={() => {navigation.navigate('DateFormScreen')}}>
            <Text style={styles.textButton}>Make Date</Text>
          </TouchableOpacity>
        
          {
            isAdmin ? (
                <TouchableOpacity style={styles.buttonShowDates} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.textButton}>Get Dates</Text>
                </TouchableOpacity>
            ) : (
              <Text></Text>
            )
          }
          <TouchableOpacity style={styles.buttonExit} onPress={getSignOut}>
            <Text style={styles.textButton}>Exit</Text>
          </TouchableOpacity>
      </Layout>

    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonExit: {
        backgroundColor: 'red',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonShowDates: {
      backgroundColor: '#80F3D2',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 30,
    },
    buttonMakeDate:{
      backgroundColor: '#F792F4',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 30,
    }
})