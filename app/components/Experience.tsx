'use client'

import Badge from './Badge'
import Button from './Button'

export default function Experience() {
  return (
    <section id="experience" className="bg-pastelgreen item py-10 content">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl lg:text-6xl font-syne font-medium">Experience</h1>
      </div>
      <div className="grid h-auto lg:h-dvh lg:grid-cols-3 items-center justify-items-center gap-10 xl:gap-15 px-10">
        <div className="order-1 grid m-5 px-5 py-10 w-full h-fit bg-aquamarine rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/ea-logo.png"
            alt="EA Logo"
            className="order-1 size-16 lg:size-32 xl:size-40 drop-shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />
          <div className="order-2">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl my-5 font-syne font-medium">Electronic Arts</h1>
            <h1 className="text-lg lg:text-xl xl:text-2xl font-syne font-medium">Software Engineer Intern</h1>
            <p className="my-5">
              Developed and deployed an insights tool for EA Data & AI platform, optimizing engagement tracking for over
              100 million users
            </p>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="React" color="bg-blue"></Badge>
              <Badge badgeText="Angular" color="bg-coral"></Badge>
              <Badge badgeText="Spring" color="bg-green"></Badge>
            </div>
          </div>
        </div>
        <div className="order-2 grid m-5 px-5 py-10 w-full h-fit bg-aquamarine rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/ea-logo.png"
            alt="EA Logo"
            className="order-1 size-16 lg:size-32 xl:size-40 drop-shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />
          <div className="order-2">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl my-5 font-syne font-medium">Electronic Arts</h1>
            <h1 className="text-lg lg:text-xl xl:text-2xl font-syne font-medium">Software Engineer Intern</h1>
            <p className="my-5">
              Developed and deployed an insights tool for EA Data & AI platform, optimizing engagement tracking for over
              100 million users
            </p>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="React" color="bg-blue"></Badge>
              <Badge badgeText="Angular" color="bg-coral"></Badge>
              <Badge badgeText="Spring" color="bg-green"></Badge>
            </div>
          </div>
        </div>
        <div className="order-3 grid m-5 px-5 py-10 w-full h-fit bg-aquamarine rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/ea-logo.png"
            alt="EA Logo"
            className="order-1 size-16 lg:size-32 xl:size-40 drop-shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />
          <div className="order-2">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl my-5 font-syne font-medium">Electronic Arts</h1>
            <h1 className="text-lg lg:text-xl xl:text-2xl font-syne font-medium">Software Engineer Intern</h1>
            <p className="my-5">
              Developed and deployed an insights tool for EA Data & AI platform, optimizing engagement tracking for over
              100 million users
            </p>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="React" color="bg-blue"></Badge>
              <Badge badgeText="Angular" color="bg-coral"></Badge>
              <Badge badgeText="Spring" color="bg-green"></Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
