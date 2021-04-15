import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {Provider} from 'react-redux';
// import {applyMiddleware, createStore} from 'redux';
// import rootReducer, { rootSaga } from './modules';
// import createSagaMiddleware from 'redux-saga';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
    // <Provider store={store}> 
//   <React.StrictMode>
        <App />,
//  </React.StrictMode>
    // </Provider>,
    document.getElementById('root')
);
