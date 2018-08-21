import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk, ReduxPromise)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
