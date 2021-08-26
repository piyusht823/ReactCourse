
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  const [mode, setMode]= useState('light'); //weather dark mode is enable or not 

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#23384d';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }

  }
  return (
    <>
    {/* <Navbar title="Piyush" abouttext="About Piyush  "/> */}
    <Navbar title="Piyush" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to Analyze:" mode={mode}/>
    </div>
    </>
  );
}

export default App;
