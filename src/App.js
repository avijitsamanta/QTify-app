import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
     <Button>My btn</Button>
    </div>
  );
}

export default App;
