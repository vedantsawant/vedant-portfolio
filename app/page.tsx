import Image from 'next/image'
import ThemeSwitch from './components/ToggleButton'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Button from './components/Button'
import About from './components/About'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Navbar />
      <div className="pt-15">
        <About />
        <Experience />
        <Experience />
      </div>
    </main>
  )
}
