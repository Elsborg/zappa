import './App.css';
import Home from './components/Home';
import Layout from "./components/Layout";
import Menu from './components/Menu';
import Navigation from './components/Navigation';




function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <div className='page-wrapper'>
      <Home />
      <Menu />
      </div>

      
    </div>
);
}

export default App;
