import './App.css';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
