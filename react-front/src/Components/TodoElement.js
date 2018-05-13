import React from 'react';
import IconButton from 'material-ui/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Checkbox from 'material-ui/Checkbox';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

class TodoElement extends React.Component {
    constructor(props) {
        super();
        this.label = props.label;
        this.state = {
            label: props.label,
            status: props.status
        }
    }

    isChecked = () => {
        return this.state.status == 'complete';
    }

    toggleCheck = () => {
        var status = this.state.status;
        if (status == 'complete') {
            this.setState({status: 'incomplete'});
        } else {
            this.setState({status: 'complete'})
        }
    }

    handleClick = (e) => {
        this.toggleCheck();
    }

    render() {
        var textItem;
        if (!this.isChecked()) {
            textItem = <ListItemText primary={ this.state.label } />
        } else {
            textItem = <ListItemText primary={ this.state.label }
                                     style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} />
        }
        return (
            <ListItem
                dense
                button
                onClick={this.handleClick}
            >
                <Checkbox
                    checked={this.isChecked()}
                    tabIndex={-1}
                    disableRipple
                />
                { textItem }
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove">
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default TodoElement;