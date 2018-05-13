import React from 'react';
import List from 'material-ui/List';
import TodoElement from "./TodoElement";


class TodoList extends React.Component {

    constructor(props) {
        super();
        this.state = {'items': [
                {'label':'Line item 1', 'status': 'complete'},
                {'label':'Line item 2', 'status': 'incomplete'},
                {'label':'Line item 3', 'status': 'incomplete'}
            ]
        }
    }

    render() {
        return(
            <List>
                {this.state['items'].map(todoElement => (
                    <TodoElement label={todoElement.label} status={todoElement.status}/>
                ))}
            </List>
        );
    }

}

export default TodoList;