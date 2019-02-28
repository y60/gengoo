import { connect } from 'react-redux';
import * as actions from './../actions/Generator';
import Generator from './../components/Generator.jsx';

const mapStateToProps = state => {
    return {gengo:state.gengo,
            draft:state.draft,
            name:state.name
        }
}

const mapDispatchToProps = dispatch => {
    return {
        generate: () => dispatch(actions.generate()),
        changeDraft:(draft)=>dispatch(actions.changeDraft(draft)),
        changeName: (name) => dispatch(actions.changeName(name)),
        leak:(name,gengo) => dispatch(actions.leak(name,gengo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator)