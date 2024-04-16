'use client'

import Button from './Button'

export default function Projects() {
  return (
    <section id="projects" className="bg-white item py-10 content">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl lg:text-6xl font-syne font-medium">Projects</h1>
      </div>
      <div className="grid h-dvh lg:grid-cols-3 items-center justify-items-center gap-10 lg:gap-20 px-10">
        <div className="order-1 mx-5 p-5 w-full h-2/3 bg-white rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Key/Value Store
        </div>
        <div className="order-2 mx-5 p-5 w-full h-2/3 bg-white rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Car Rental Website
        </div>
        <div className="order-3 mx-5 p-5 w-full h-2/3 bg-white rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          Virtual Avatar
        </div>
      </div>
    </section>
  )
}
