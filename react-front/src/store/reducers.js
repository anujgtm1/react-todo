import * as actions from './action-types'

const todos = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            console.log("ADD");
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case actions.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                 ? {...todo, completed: !todo.completed}
                 : todo)
        case actions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default todos