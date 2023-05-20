import './App.css';
import { Dashboard, Landing, Register, Error } from './pages/index.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="landing">Landing</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
