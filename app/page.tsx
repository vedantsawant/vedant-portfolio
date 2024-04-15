'use client'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import MomentumScroll from './components/MomentumScroll'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <div className="t-0 mb-5">
        <Navbar />
      </div>
      <div className="mt-200 snap-y snap-mandatory">
        <MomentumScroll>
          <About />
          <Experience />
          <Projects />
        </MomentumScroll>
      </div>
    </main>
  )
}
