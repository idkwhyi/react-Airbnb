import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cards = data.map(item => {
  return <Card
    key={item.id}
    {...item}
    // item = {item}
    // img={item.coverImg}
    // rating={item.stats.rating}
    // review_count={item.stats.reviewCount}
    // location={item.location}
    // title={item.title}
    // price={item.price}
    // openSpots={item.openSpots}
  />
})

function App() {
  return (
    <div className='w-screen h-full flex flex-col justify-center '>
      <Navbar />
      <Hero />
      <div className='h-auto m-10 flex gap-5'>
        {cards}
      </div>
    </div>
  );
}

export default App;
