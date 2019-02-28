import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress  from '@material-ui/core/LinearProgress';
import {orderedRef,LOAD_COUNT} from './../config.js'
import InfiniteScroll from 'react-infinite-scroller';

class GengoView extends Component {
    constructor(props) {
        super(props);
        this.empty=true
    }
    render(){
        const {classes,gengos,hasMore,recieveGengo,recieveOldGengos} = this.props;
        if(this.empty&&gengos.length>0){
            this.empty=false
            orderedRef.endBefore(gengos[0].timestamp)
                .onSnapshot(ss=>{
                    ss.docChanges().forEach(change=>{
                        if(change.type==="added"){
                            recieveGengo(Object.assign({key:change.doc.id},change.doc.data()))
                        }
                    })
            })
        }
        return (<InfiniteScroll
            pageStart={0}
            loadMore={()=>{
                (gengos.length?orderedRef.startAfter(gengos[gengos.length-1].timestamp):orderedRef)
                .limit(LOAD_COUNT)
                .get().then( snapshot=>{
                    recieveOldGengos(snapshot.docs)
                })
            }}
            hasMore={hasMore}
            loader={ <LinearProgress  className={classes.chip} key={0}/>} 
            className={classes.scroll}>
            {gengos.map(d=> <Tooltip title={d.name} key={d.key}>
                <Chip label={d.gengo} className={classes.chip}  clickable />
            </Tooltip>)}
        </InfiniteScroll>)
    }
}

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
    scroll:{

    }
});

GengoView.propTypes = {
    classes: PropTypes.object.isRequired,
    recieveGengo: PropTypes.func,
    gengos: PropTypes.array,
    hasMore: PropTypes.bool,
    recieveOldGengos: PropTypes.func,
};

export default withStyles(styles)(GengoView);