import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import {store, actions} from './store'

export default class Footer extends Component {
    removeCompleted() {
        const action = actions.removeCompleted()
        store.dispatch(action)
    }

    render () {
        return (
            <TouchableOpacity onPress={this.removeCompleted}>
                <Text style={styles.removeButtonText}>
                    Remove Completed Items
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    removeButtonText: {
        backgroundColor: 'white',
        color: 'tomato',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 12
    }
})