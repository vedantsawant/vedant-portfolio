'use client'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import MomentumScroll from './components/MomentumScroll'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-200 items-center justify-center">
        <MomentumScroll>
          <About />
          <Experience />
          <Projects />
        </MomentumScroll>
      </div>
    </main>
  )
}
