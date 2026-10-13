import { Background3D } from './components/Background3D'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { OpenSource } from './components/OpenSource'
import { Writing } from './components/Writing'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background3D />
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
