import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import Symptoms from './pages/Symptoms';
import Timeline from './pages/Timeline';
import Advocacy from './pages/Advocacy';
import Education from './pages/Education';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="symptoms" element={<Symptoms />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="advocacy" element={<Advocacy />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
