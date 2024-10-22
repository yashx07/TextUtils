
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(5 29 84)'
      showAlert("Dark mode has been enabled", "success")
      // document.title="TextUtils-Dark mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      //  document.title="TextUtils-Light mode"
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar  /> */}
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
          <Route index element={
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
           } /> 
            <Route path="about" element={<About mode={mode} />}>
       
        </Route>
      </Routes>  
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
