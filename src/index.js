import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </Provider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
