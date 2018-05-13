import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PaperElement from './PaperElement';
import EmptyTodoAddButton from './EmptyTodoAddButton'


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 40
    },
    paper: {
        height: 140,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3
    }
});

class MainView extends React.Component {
    state = {
        spacing: '24',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid item xs={12}>
                <Grid container className={classes.root} justify="right" spacing={Number(spacing)}>
                    <PaperElement className={classes.paper}/>
                    <EmptyTodoAddButton />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(MainView);
