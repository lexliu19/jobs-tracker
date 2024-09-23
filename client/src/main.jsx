import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/inter'; // Imports all weights
import './index.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer position="top-center" />
  </>
);
