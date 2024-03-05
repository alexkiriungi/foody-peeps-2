import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import Auth0ProviderwithNavigate from './auth/Auth0ProviderwithNavigate.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderwithNavigate>
        <AppRoutes />
      </Auth0ProviderwithNavigate>
    </Router>
  </React.StrictMode>,
);
