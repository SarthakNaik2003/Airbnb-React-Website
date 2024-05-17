
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </section>
    </>
  )
}

export default App
