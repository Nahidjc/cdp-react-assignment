import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
