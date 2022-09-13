import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/Data'

function App() {
  
  const cards = Data.map(item => {
    return <Card 
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='main-card'>
        {cards}
      </div>
      
    </div>
  );
}

export default App;
