import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children } = props;
    return (
        <View  style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 7,
        elevation: 2,
        borderRadius: 8,
        margin: 25

    }
})
export default FormRow;