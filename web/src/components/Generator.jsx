import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Generator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, gengo, name, generate, changeName, leak } = this.props;
        return (
            <div align="center">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            元号ジェネレータ！
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.paper} elevation={1}>
                    <Typography variant="h1" align="center">
                        {gengo}
                    </Typography>
                </Paper>
                <Button variant="contained" size="large" color="primary" onClick={() => generate()} className={classes.button}>
                    生成する
                </Button>
                    <Grid container spacing={8} alignItems="flex-end" justify="center">
                        <Grid item>
                            <TextField
                                label="名前"
                                className={classes.textField}
                                value={name}
                                onChange={event=>changeName(event.target.value)}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" size="small" color="primary" 
                                onClick={()=>leak(name,gengo)} className={classes.button}>
                                漏洩する
                            </Button>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

const styles = theme => ({
    paper: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      margin:theme.spacing.unit
    },
    button:{
        margin: theme.spacing.unit,
        align:"center",
    }
});

Generator.propTypes = {
    classes: PropTypes.object.isRequired,
    generate: PropTypes.func,
    changeName: PropTypes.func,
    leak: PropTypes.func,
    gengo: PropTypes.string,
    name: PropTypes.string,
};

export default withStyles(styles)(Generator);