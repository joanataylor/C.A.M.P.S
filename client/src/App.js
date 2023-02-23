import './App.css';
import Appbar from './components/Appbar';
import Student from './components/Student';
import Navbar from './components/Navbar';
import {Routes ,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/login" element={<Navbar />}/>
        <Route path="/dashboard" element={<Navbar />}/>

      </Routes>
    </div>
  );
}

export default App;
