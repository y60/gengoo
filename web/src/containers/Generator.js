import { connect } from 'react-redux';
import * as actions from './../actions/Generator';
import Generator from './../components/Generator.jsx';

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        generate: () => dispatch(actions.generate()),
        changeName: (name) => dispatch(actions.changeName(name)),
        leak:(name,gengo) => dispatch(actions.leak(name,gengo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator)