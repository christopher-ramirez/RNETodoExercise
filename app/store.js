import { createStore } from 'redux'

// actions type
export const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
    REMOVE_ITEM: 'REMOVE_ITEM',
    REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS'
}

export const actions = {
    add: (item) => {
        return {type: types.ADD_TODO, item: {...item, done:false }}
    },

    toogleComplete: (index, value) => {
        return {type: types.TOGGLE_ITEM_COMPLETED, index, value}
    },

    removeItem: (index) => {
        return {type: types.REMOVE_ITEM, index}
    },

    removeCompleted: () => {
        return {type: types.REMOVE_COMPLETED_ITEMS}
    }
}

const initialState = {
    todos: []
}

export const reducer = (state, action) => {
    const {todos} = state

    switch (action.type) {
        case types.ADD_TODO: {
            return {
                ...state,
                todos:  [action.item, ...todos]
            }
        }

        case types.TOGGLE_ITEM_COMPLETED: {
            todos[action.index] = { ...todos[action.index], done: action.value }
            return {
                ...store,
                todos: todos
            }
        }

        case types.REMOVE_ITEM: {
            return {
                ...store,
                todos: todos.filter((item, index) => index !== action.index)
            }
        }

        case types.REMOVE_COMPLETED_ITEMS: {
            return {
                ...store,
                todos: todos.filter( (task) => !task.done )
            }
        }
    }

    return state
}


export const store = createStore(reducer, initialState)
