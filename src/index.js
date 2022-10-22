import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoot from './components/Root';
import {persistor, store} from './redux/store/configureStore';
import appTheme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <AppRoot />
                </ThemeProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
