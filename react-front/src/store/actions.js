import * as action from './action-types'

let nextTodoID = 0
let nextTodoListID = 0


export const addTodo = text => ({
    type: action.ADD_TODO,
    id: nextTodoID++,
    text
})

export const toggleTodo = id => ({
    type: action.TOGGLE_TODO,
    id
})

export const removeTodo = id => ({
    type: action.REMOVE_TODO,
    id
})