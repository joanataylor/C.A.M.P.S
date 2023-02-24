import './App.css';
import {Routes ,Route} from "react-router-dom"
import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import CounselorDetail from './pages/CounselorDetail';
import ActivityDetail from './pages/ActivityDetail';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import VerticalNavbar from './components/VerticalNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />     
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/counselor" element={<CounselorDetail />}/>
        <Route path="/activity" element={<ActivityDetail />}/>
        <Route path="/vertical" element={<VerticalNavbar />}/>

      </Routes>

    </div>
  );
}

export default App;
