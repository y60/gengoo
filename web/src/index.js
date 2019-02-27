import React from 'react';
import ReactDOM from 'react-dom';
import Generator from './containers/Generator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Generator/>
    </Provider>,
    document.getElementById('root'));