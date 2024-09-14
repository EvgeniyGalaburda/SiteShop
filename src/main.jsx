import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './components/App';
import './styles/index.css'
import { Provider } from 'react-redux';
import { store } from './features/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename='/SiteShop/'>
  <App />
  </BrowserRouter>
  </Provider>
    

)
