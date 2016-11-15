var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');

var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var store = createStore(reducers.hotNcoldReducer,applyMiddleware(thunk));
module.exports  = store;