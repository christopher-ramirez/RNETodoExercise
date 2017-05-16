import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { store, actions } from './../store'

export class ToogleDone extends Component {
    toogle = () => {
        const {index, status} = this.props
        const action = actions.toogleComplete(index, !status)
        store.dispatch(action)
    }

    render() {
        const {status} = this.props
        return (
            <TouchableOpacity onPress={this.toogle}>
                <View style={styles.toogleDone}>
                    {status ? (<View style={styles.toogleFill} />) : (<View />)}
                </View>
            </TouchableOpacity>
        )
    }
}

export class RemoveItemButton extends Component {
    removeItem = () => {
        const {index} = this.props
        const action = actions.removeItem(index)
        store.dispatch(action)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.removeItem}>
                <Text style={styles.removeItemButton}>✖</Text>
            </TouchableOpacity>
        )
    }
}

export default class TodoItem extends Component {
    render() {
        const {task, index} = this.props
        return (
            <View style={styles.listItem}>
                <Text style={styles.taskText}>{task.task}</Text>
                <ToogleDone status={task.done} index={index} />
                <RemoveItemButton index={index} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 3,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },

    taskText: {
        flexGrow: 1,
        color: 'hsl(0, 0%, 30%)',
        fontSize: 14,
        textAlignVertical: 'center',
        paddingVertical: 6
    },

    toogleDone: {
        borderColor: 'hsl(0, 0%, 30%)',
        borderWidth: 2,
        width: 20,
        height: 20,
        padding: 2
    },

    toogleFill: {
        flex: 1,
        backgroundColor: 'hsl(0, 0%, 30%)'
    },

    removeItemButton: {
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 13,
        marginLeft: 12,
        width: 20,
        height: 20,
        textAlignVertical: 'center'
    }
})