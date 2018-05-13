import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class TodoTitle extends React.Component {
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Title
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TodoTitle;