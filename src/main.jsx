import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import i18next from './utils/i18Next';
import App from './components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)