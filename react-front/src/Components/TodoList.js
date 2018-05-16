import React from 'react';
import List from 'material-ui/List';
import TodoElement from "./TodoElement";


class TodoList extends React.Component {

    render() {
        return(
            <List>
                {this.props.items.map((todoElement, i) => (
                    <TodoElement label={todoElement.label} status={todoElement.status} key={i} itemId={i}
                                 removeItem={this.props.removeItem} toggleCheck={this.props.toggleCheck}/>
                ))}
            </List>
        );
    }

}

export default TodoList;