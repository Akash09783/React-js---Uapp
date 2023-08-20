
import './App.css';
import Navbar from './components/Navbar1';
import Textform from './components/Textform';
// import About1 from './About1';
import React, { useState } from 'react';
import Alert from './Alert';
// import { BrowserRouter as Router,
//   Switch,
//   Link,
//   Routes,
//   Route,
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  // eslint-disable-next-line no-unused-vars
  const [alert, setAlert] = useState(null);


const showAlert = (message,type)=>{
  setAlert({
  msg: message,
  type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
}

  // const removeBodyClasses=()=>{
  // document.body.classlist.remove('bg-light')
  // document.body.classlist.remove('bg-dark')
  // document.body.classlist.remove('bg-primary')
  // document.body.classlist.remove('bg-warning')
  // document.body.classlist.remove('bg-danger')
  // document.body.classlist.remove('bg-success')
  // }




  const toggleMode = (cls)=>{
    // removeBodyClasses()
    console.log()
    document.body.classlist?.add('bg-'+cls)
   
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title= 'Uapp-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title= 'Uapp-Light Mode';
    }
  }
  return (
    <>
   
     <Navbar title="uapp" mode={mode} toggleMode={toggleMode}/>
     <Alert alert = {alert}/>
     {/* <Router> */}
      
     <div className="container my-3">
    
   
     {/* <Routes> */}
 
      {/* <Route path="/about" element={<About1/>} ></Route> */}
      {/* < path="/" element={ 
             {/* </Routes> */}

      <Textform heading = "Uapp - FEATURES"/>
      

     
    
     </div>
     {/* </Router> */}
     
   
    </>
    
  );
}

export default App;
