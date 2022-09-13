
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data'
// import img from './images/katie-zaferes.png'

function App() {
  const cards = data.map((x) => {
    return <Card 
      key = {x.id}
      {...x}
  />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
