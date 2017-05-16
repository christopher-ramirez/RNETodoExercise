import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { store } from './../store'
import TodoItem from './items'

export default class TodosList extends Component {
    componentWillMount() {
        const {todos} = store.getState()
        this.setState({todos})
        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState()
            this.setState({todos})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {todos} = this.state

        return (
            <ScrollView>
                {
                    todos.map((task, index) => {
                        return (
                            <TodoItem index={index} task={task} key={index} />
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 15
    }
})