import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login_Register from './pages/LogReg';
import Dashboard from './pages/Dashboard';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/'>
        <Route index path='/login-register' element={<Login_Register/>}/>
      </Route>
      {/* This are routes with Navigation Bar */}
      <Route path='/' element={<MainLayout />}>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Route>
    </>
  )

);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
