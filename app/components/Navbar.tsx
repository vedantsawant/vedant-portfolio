import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-[88px] w-full items-center border-b-4 border-black bg-white px-5 m500:h-16 ">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
        <Link className="text-3xl font-bold m500:text-xl" href={'/'}>
          VEDANT SAWANT
        </Link>
        <div className='flex'>
        <Link className="text font-semibold mx-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" href={'/'}>
          ABOUT
        </Link>
        <Link className="text font-semibold mx-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" href={'/'}>
          EXPERIENCE
        </Link>
        <Link className="text font-semibold mx-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" href={'/'}>
          PROJECTS
        </Link>
        </div>
        <div className='flex'>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vedant-sawant7/"
          className="mx-1 flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <AiFillLinkedin className="h-6 w-6 m500:h-4 m500:w-4" />
        </a>
        <a
          target="_blank"
          href="https://github.com/vedantsawant"
          className="mx-1 flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
        </a>
        </div>

      </div>
    </nav>
  )
}