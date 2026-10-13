import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { OpenSource } from './components/OpenSource'
import { Writing } from './components/Writing'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Featured />
        <OpenSource />
        <Writing />
      </main>
      <Footer />
    </div>
  )
}
