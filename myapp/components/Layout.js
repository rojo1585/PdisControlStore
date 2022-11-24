import React from 'react'
import { View, StyleSheet} from 'react-native'


const Layout = ({ children }) => {
    return (<View style={styles.container}>{children}</View> )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2E2F30",
        padding: 20,
        alignItems: 'center',
        width: "100%",
        height: "100%"
        

    }
});

export default Layout