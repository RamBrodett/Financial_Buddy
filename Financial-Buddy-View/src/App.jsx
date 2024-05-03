import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login_Register from './pages/LogReg';
import Dashboard from './pages/Dashboard';
import Savings from './pages/SavingsPage';
import Expenses from './pages/ExpensesPage';
import Insights from './pages/AnalyticsPge';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login_Register />} />
        {/* Routes with Navigation Bar */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/insights" element={<Insights />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
