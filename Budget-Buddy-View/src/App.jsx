import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login_Register from './pages/LogReg';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login_Register />} />
        {/* Routes with Navigation Bar */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/savings" element={<Dashboard />} />
          <Route path="/expenses" element={<Dashboard />} />
          <Route path="/insights" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
