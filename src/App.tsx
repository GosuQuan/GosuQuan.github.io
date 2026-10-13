import { LocaleProvider } from './i18n/LocaleProvider'
import { Background3D } from './components/Background3D'
import { SoftLight } from './components/SoftLight'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { OpenSource } from './components/OpenSource'

export default function App() {
  return (
    <LocaleProvider>
      <div className="relative min-h-screen">
        <Background3D />
        <SoftLight />
        <div className="relative z-10 isolate">
          <Nav />
          <main>
            <Hero />
            <Featured />
            <OpenSource />
            <About />
          </main>
          <Footer />
        </div>
      </div>
    </LocaleProvider>
  )
}
