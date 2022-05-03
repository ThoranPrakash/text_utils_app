import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
    const showAlert =(message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          showAlert("Dark Mode has been enabled", "success");
          document.title = "TextUtils - Dark Mode";
        }else{
          setMode('light');
          showAlert("Light Mode has been enabled", "success");
          document.title = "TextUtils - Light Mode";
        }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" homeText ="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyse" mode={mode}/>} />
        </Routes>
      </div>
      
    </Router>
    </>
  );
}

export default App;
