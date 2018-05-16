import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from 'material-ui/IconButton';

class TodoTitle extends React.Component {

    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flex: 1}}>
                        {this.props.title}
                    </Typography>
                    <IconButton style={{flex: 1}} onClick={this.props.addEmptyItem}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TodoTitle;