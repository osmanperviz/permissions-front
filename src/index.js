import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import createStore, { sagaMiddleware } from './store'
import routes from './routes'
import rootSaga from './sagas'


const store = createStore({modalOpen: false})
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
     {routes}
	</Provider>,
  document.getElementById('root')
);
registerServiceWorker();
