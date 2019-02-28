import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/InputBase';
//import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import GengoView from './../containers/GengoView';

class Generator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, gengo,draft, name, generate, /*changeName,*/changeDraft, leak } = this.props;
        return (
            <div align="center">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            元号を漏洩させよう！
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.paper} elevation={1}>
                    <Input  value={draft} onChange={e=>changeDraft(e.target.value)}
                        inputProps={{
                            style:{textAlign: "center",
                                fontSize:"100px"
                            },
                        }}
                    />
                </Paper>
                <Grid container spacing={8} alignItems="flex-end" justify="center">
                    {/* <Grid item>
                        <TextField
                            label="名前"
                            className={classes.textField}
                            value={name}
                            onChange={event=>changeName(event.target.value)}
                            margin="normal"
                        />
                    </Grid> */}
                    <Grid item>
                        <IconButton aria-label="generate" className={classes.margin} onClick={() => generate()}>
                            <RefreshIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="small" color="primary" 
                            onClick={()=>leak(name,gengo)} className={classes.button}>
                            「{gengo}」を漏洩する
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="small" color="primary" 
                            onClick={()=>{leak(name,gengo)
                                window.open('https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&text='+encodeURI('「'+gengo+'」を漏洩しました。')+'&tw_p=tweetbutton&url=https%3A%2F%2Fgengoo.firebaseapp.com%2F')
                            }} className={classes.button}>
                            漏洩してツイートする
                        </Button> 
                    </Grid>
                </Grid>
                <hr/>
                漏洩した元号
                <GengoView/>
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
    },
    input:{
        align:"center",
    }
});

Generator.propTypes = {
    classes: PropTypes.object.isRequired,
    generate: PropTypes.func,
    changeName: PropTypes.func,
    changeDraft: PropTypes.func,
    leak: PropTypes.func,
    gengo: PropTypes.string,
    draft: PropTypes.string,
    name: PropTypes.string,
};

export default withStyles(styles)(Generator);