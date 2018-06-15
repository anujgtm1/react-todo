import React from 'react';
import Paper from 'material-ui/Paper';
import TodoList from './TodoList';
import TodoTitle from "./TodoTitle";
import { connect } from 'react-redux'

const styles = {
    root: {
        width: '100%',
        maxWidth: 360
    },
};



class PaperElement extends React.Component {

    render() {
        return (
            <div >
                <Paper xs={3} style={ styles.root } >
                    <TodoTitle title={'List 1'} />
                    <TodoList todos={this.props.todos} />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(PaperElement);
