'use client'

import Badge from './Badge'
import Button from './Button'

export default function Experience() {
  return (
    <section id="experience" className="bg-white item py-10 mx-auto content justify-center items-center">
      <div className="max-w-screen-xl mx-auto justify-center items-center">
        <div className="flex justify-center items-center my-10">
          <h1 className="text-4xl lg:text-6xl font-syne font-medium">Experience</h1>
        </div>
        <div className="grid h-auto lg:h-dvh lg:grid-cols-3 items-center justify-items-center gap-5 xl:gap-10 px-10">
          <div className="order-1 grid px-5 py-10 w-full h-fit bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/ea-logo.png"
              alt="EA Logo"
              className="order-1 size-16 lg:size-32 drop-shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <div className="order-2">
              <h1 className="text-2xl lg:text-3xl my-5 font-syne font-medium truncate overflow-clip">
                Electronic Arts
              </h1>
              <h1 className="text-lg lg:text-xl font-syne font-normal">Software Engineer Intern</h1>
              <p className="my-5">
                Developed and deployed an insights tool for EA Data & AI platform, optimizing engagement tracking for
                over 100 million users
              </p>
              <div className="flex gap-2.5 my-5">
                <Badge badgeText="React" color="bg-cyan-400"></Badge>
                <Badge badgeText="Angular" color="bg-red-500"></Badge>
                <Badge badgeText="Spring" color="bg-lime-400"></Badge>
              </div>
            </div>
          </div>
          <div className="order-2 grid px-5 py-10 w-full h-fit bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/virtubox-logo.png"
              alt="EA Logo"
              className="order-1 size-16 lg:size-32 drop-shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <div className="order-2">
              <h1 className="text-2xl lg:text-3xl my-5 font-syne font-medium truncate overflow-clip">Virtubox</h1>
              <h1 className="text-lg lg:text-xl font-syne font-normal">Web Development Intern</h1>
              <p className="my-5">
                Designed and built customizable UI components using React.js for the content management system used by
                100+ businesses.
              </p>
              <div className="flex gap-2.5 my-5">
                <Badge badgeText="Typescript" color="bg-sky-600"></Badge>
                <Badge badgeText="React" color="bg-cyan-400"></Badge>
              </div>
            </div>
          </div>
          <div className="order-3 grid px-5 py-10 w-full h-fit bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/sbu-logo.png"
              alt="EA Logo"
              className="order-1 size-16 lg:size-32 drop-shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <div className="order-2">
              <h1 className="text-2xl lg:text-3xl my-5 font-syne font-medium truncate overflow-clip">
                Stony Brook University
              </h1>
              <h1 className="text-lg lg:text-xl font-syne font-normal">Research Assistant</h1>
              <p className="my-5">
                Engineered a real-time pipeline for processing live audio input, generating facial animation output for
                Virtual Avatar with low latency.
              </p>
              <div className="flex gap-2.5 my-5">
                <Badge badgeText="Python" color="bg-yellow"></Badge>
                <Badge badgeText="PyTorch" color="bg-coral"></Badge>
                <Badge badgeText="AWS" color="bg-amber-500"></Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
