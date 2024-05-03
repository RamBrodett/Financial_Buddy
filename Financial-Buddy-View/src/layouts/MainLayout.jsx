import { Outlet} from "react-router-dom";
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout