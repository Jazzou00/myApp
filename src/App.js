import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <>

    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    {/* <Portfolio/> */}
    <Contact/>
    <Footer/>
    
    
    </>
  );
}

export default App;
