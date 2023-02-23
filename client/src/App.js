import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';
import Navbar from './components/Navbar';
import {Routes ,Route} from "react-router-dom"
import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import CounselorDetail from './pages/CounselorDetail';
import ActivityDetail from './pages/ActivityDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/counselor" element={<CounselorDetail />}/>
        <Route path="/activity" element={<ActivityDetail />}/>

      </Routes>

    </div>
  );
}

export default App;
