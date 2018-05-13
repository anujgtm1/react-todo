import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import TodoList from './TodoList';
import TodoTitle from "./TodoTitle";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360
    },
});



class PaperElement extends React.Component {

    render() {
        const { classes } = styles();

        return (
            <div >
                <Paper xs={3} className={ styles().root } >
                    <TodoTitle/>
                    <TodoList />
                </Paper>
            </div>
        );
    }
}

PaperElement.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperElement);
