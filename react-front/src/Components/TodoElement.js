import React from 'react';
import IconButton from 'material-ui/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Checkbox from 'material-ui/Checkbox';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import {toggleTodo, removeTodo } from "../store/actions";
import { connect } from 'react-redux';

class TodoElement extends React.Component {

    render() {
        var textItem;
        if (!this.props.completed) {
            textItem = <ListItemText primary={ this.props.text } />
        } else {
            textItem = <ListItemText primary={ this.props.text }
                                     style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} />
        }
        return (
            <ListItem
                dense
                button
            >
                <Checkbox
                    checked={this.props.completed}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => this.props.toggleTodo(this.props.id)}
                />
                { textItem }
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={() => this.props.removeTodo(this.props.id)}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}


const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoElement);