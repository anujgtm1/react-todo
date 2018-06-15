import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from 'material-ui/IconButton';
import { addTodo } from "../store/actions";
import { connect } from 'react-redux';

class TodoTitle extends React.Component {

    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flex: 1}}>
                        {'Title'}
                    </Typography>
                    <IconButton onClick={this.props.addTodo}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => ({
    title: state.todos.title

})

const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo("Dummy Text"))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoTitle);