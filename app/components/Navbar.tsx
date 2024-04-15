import Link from 'next/link'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-auto w-full items-center border-b-4 border-black bg-white px-5 m500:h-16 ">
      <div className="mx-auto flex w-full max-w-full items-center justify-center md:justify-end md:mb-0">
        <Image className="flex size-8 md:size-16" src="/logo.png" width={75} height={75} alt="Logo"></Image>
        <Link className="text-3xl md:text-3xl lg:text-4xl font-syne font-medium" href={'/'}>
          Vedant Sawant
        </Link>
        <div className="hidden md:flex items-center text-base justify-end px-5 md:ml-auto">
          <Link
            className="text-xl font-syne font-medium m-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]"
            href={'#about'}
          >
            About
          </Link>
          <Link
            className="text-xl font-syne font-medium m-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]"
            href={'#experience'}
          >
            Experience
          </Link>
          <Link
            className="text-xl font-syne font-medium m-2 transition-all delay-150 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]"
            href={'#projects'}
          >
            Projects
          </Link>
        </div>
        <div className="hidden md:flex items-center text-base justify-end ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vedant-sawant7/"
            className="bg-sky-700 m-1 flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <FaLinkedinIn className="text-white h-6 w-6 m500:h-4 m500:w-4" />
          </a>
          <a
            target="_blank"
            href="https://github.com/vedantsawant"
            className="m-1 flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}
