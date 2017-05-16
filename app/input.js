import React, { Component } from 'react'
import {TextInput, StyleSheet } from 'react-native'
import { store, actions } from './store'

export default class Input extends Component {
    state = {
        text: ''
    }

    onChangeText = (text) => this.setState({text})

    onSubmitEditing = () => {
        const {onSubmitEditing} = this.props
        const {text} = this.state

        if (!text) return

        const action = actions.add({task: text})
        store.dispatch(action)
        this.setState({text: ''})
    }

    render() {
        const {placeholder} = this.props
        const {text} = this.state

        return (
            <TextInput
                style={styles.input}
                underlineColorAndroid={'transparent'}
                value={text}
                placeholder="Enter an item!"
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 12
    }
})