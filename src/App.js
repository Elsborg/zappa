import './App.css';
import Booking from './components/Booking';
import Home from './components/Home';
import Menu from './components/Menu';
import Navigation from './components/Navigation';




function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <div className='page-wrapper'>
      <Home />
      <Menu />
      <Booking />
      </div>

      
    </div>
);
}

export default App;
