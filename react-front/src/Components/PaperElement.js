import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TodoList from './TodoList';
import TodoTitle from "./TodoTitle";

const styles = {
    root: {
        width: '100%',
        maxWidth: 360
    },
};



class PaperElement extends React.Component {

    constructor(props) {
        super();
        this.state = {
            'title': 'List 1',
            'items': [
                {'label':'Line item 1', 'status': 'complete'},
                {'label':'Line item 2', 'status': 'incomplete'},
                {'label':'Line item 3', 'status': 'incomplete'}
            ]
        }
        this.addEmptyItem = this.addEmptyItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
    }

    addEmptyItem(event) {
        var todoItems = this.state.items;
        var item = {'label': 'Dummy todo item', 'status': 'incomplete'};
        todoItems.push(item);
        this.setState({items: todoItems});
    }

    removeItem(itemIndex, event) {
        var todoItems = this.state.items;
        todoItems.splice(itemIndex - 1, 1);
        this.setState({items: todoItems});
    }

    // TODO: anujgautam 16/05/2018 Something wrong with toggleCheck. need to FIX
    toggleCheck(itemIndex, event) {
        console.log(itemIndex);
        var todoItems = this.state.items;
        var item = todoItems[itemIndex];
        if (item.status === 'complete') {
            item.status = 'incomplete';
        } else {
            item.status = 'complete';
        }
        todoItems[itemIndex] = item;
        console.log(todoItems);
        this.setState({items: todoItems});
    }

    render() {
        return (
            <div >
                <Paper xs={3} style={ styles.root } >
                    <TodoTitle title={this.state.title} addEmptyItem={this.addEmptyItem}/>
                    <TodoList items={this.state.items} removeItem={this.removeItem} toggleCheck={this.toggleCheck}/>
                </Paper>
            </div>
        );
    }
}


export default PaperElement;
