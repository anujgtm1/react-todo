import React from 'react';
import List from 'material-ui/List';
import TodoElement from "./TodoElement";
import { connect } from 'react-redux'


class TodoList extends React.Component {

    render() {
        return(
            <List>
                {this.props.todos.map((todoElement, i) => (
                    <TodoElement text={todoElement.text} completed={todoElement.completed} key={i} id={todoElement.id} />
                ))}
            </List>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})


export default connect(mapStateToProps)(TodoList);