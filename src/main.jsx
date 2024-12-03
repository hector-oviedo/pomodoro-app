import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext.jsx';

import RoutesApp from './RoutesApp.jsx';

import './globals.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AppProvider>
        <RoutesApp />
    </AppProvider>
    </BrowserRouter>
)