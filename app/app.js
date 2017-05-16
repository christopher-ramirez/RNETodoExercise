import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Title from './title'
import Footer from './footer'
import Input from './input'
import TodosList from './list'

export default class App extends Component {
    render() {
        return (
            <View style={styles.constainer}>
                <Title>Todo List</Title>

                <Input />

                <TodosList />

                <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
    }
})