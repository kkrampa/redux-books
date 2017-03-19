import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import BookList from './containers/BookList';
import BookDetails from './containers/BookDetails';

import './style/style.scss';

import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <Provider store={store}>
            <div>
              <BookList />
              <BookDetails />
            </div>
          </Provider>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
