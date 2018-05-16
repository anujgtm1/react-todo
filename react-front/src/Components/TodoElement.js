import React from 'react';
import IconButton from 'material-ui/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Checkbox from 'material-ui/Checkbox';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

class TodoElement extends React.Component {
    constructor(props) {
        super(props);
        this.label = props.label;
        this.state = {
            label: props.label,
            status: props.status
        }
        this.itemId = props.itemId;
        console.log(this.itemId);
    }

    isChecked = () => {
        return this.props.status === 'complete';
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
                onClick={(e) => this.props.toggleCheck(this.itemId, e)}
            >
                <Checkbox
                    checked={this.isChecked()}
                    tabIndex={-1}
                    disableRipple
                />
                { textItem }
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={(e) => this.props.removeItem(this.itemId, e)}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default TodoElement;