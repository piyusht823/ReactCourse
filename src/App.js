
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Piyush" abouttext="About Piyush  "/>
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to Analyze:"/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
