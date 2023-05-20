import './App.css';
import { Dashboard, Landing, Register } from './pages/index.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<div>Error</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
