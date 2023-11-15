import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
