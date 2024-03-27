'use client'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import MomentumScroll from './components/MomentumScroll'
import Projetcs from './components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Navbar />
      <div className="pt-15 snap-y snap-mandatory">
        <MomentumScroll>
          <About />
          <Experience id="experience" />
          <Projetcs />
        </MomentumScroll>
      </div>
    </main>
  )
}
