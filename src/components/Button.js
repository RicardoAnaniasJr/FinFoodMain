import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


const Button = props => {
    const { children } = props;
    return (
        <View style={styles.container}>
            {children}

        </View>
    )

}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f28d5e',
        padding: 10,
        margin: 10,
        justifyContent: 'space-between',
        borderRadius: 8,
        elevation: 4
    }

})

export default Button;