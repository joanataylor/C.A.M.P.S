import './App.css';
import { Routes, Route } from "react-router-dom"
import Welcome from './pages/Welcome';
import DashBoard from './pages/DashBoard';
import CounselorDetail from './pages/CounselorDetail';
import ActivityDetail from './pages/ActivityDetail';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import CreateActivity from './pages/CreateActivity';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/counselor" element={<CounselorDetail />}/>
        <Route path="/activity" element={<ActivityDetail />}/>
        <Route path="/newActivity" element={<CreateActivity />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>

    </div>
  );
}

export default App;
