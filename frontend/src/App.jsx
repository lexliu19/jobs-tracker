import './App.css';
import { Landing, Register, Error, ProtectedRoute } from './pages/index.js';

import { AddJob, AllJobs, Profile, Stats, ShareLayout } from './pages/dashboard/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ShareLayout />
              </ProtectedRoute>
            }
          >
            <Route path="stats" element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
