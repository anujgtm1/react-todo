import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class EmptyTodoAddButton extends React.Component {

    styles = () => {

    }

    render() {
        return (
            <AddCircleOutlineIcon style={{ fontSize: 90 }} />
            );
    }
}

export default EmptyTodoAddButton;