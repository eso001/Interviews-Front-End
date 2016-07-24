import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import reducers from '../src/reducers/indexReducer';
import Search from '../src/components/search';
const dest = document.getElementById('content');

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/" component={Search}>
  		</Route>
  	</Router>
  </Provider>,
  dest
);

window.React = React; // enable debugger
