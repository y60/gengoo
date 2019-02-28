import { connect } from 'react-redux';
import * as actions from './../actions/GengoView';
import GengoView from './../components/GengoView.jsx';

const mapStateToProps = state => {
    return {gengos:state.gengos,
                hasMore:state.hasMore,
            }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recieveGengo: (data) => dispatch(actions.recieveGengo(data)),
        recieveOldGengos: (data) => dispatch(actions.recieveOldGengos(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GengoView)