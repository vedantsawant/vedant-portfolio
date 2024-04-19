'use client'

import Link from 'next/link'
import Badge from './Badge'
import Button from './Button'
import ImageCard from './ImageCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-beige item py-10 mx-auto content justify-center items-center">
      <div className="max-w-screen-xl mx-auto justify-center items-center">
        <div className="flex justify-center items-center my-10">
          <h1 className="text-4xl lg:text-6xl font-syne font-medium">Projects</h1>
        </div>
        <div className="grid h-auto lg:grid-cols-3 items-center justify-items-center gap-5 xl:gap-10 px-10 m-auto">
          <ImageCard imageUrl={'/car-rental.jpg'} color="bg-white">
            <Link href={''}>
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">Car Rental Website</h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="React" color="bg-cyan-400"></Badge>
              <Badge badgeText="Express.js" color="bg-yellow"></Badge>
              <Badge badgeText="Node.js" color="bg-emerald-400"></Badge>
            </div>
          </ImageCard>
          <ImageCard imageUrl={'/go-project.png'} color="bg-white">
            <Link href={''}>
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">
                Fault tolerant Key/Value Store
              </h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="Go" color="bg-sky-400"></Badge>
              <Badge badgeText="gRPC" color="bg-teal-400"></Badge>
            </div>
          </ImageCard>
          <ImageCard imageUrl={'/dns-resolver.jpg'} color="bg-white">
            <Link href={''}>
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">DNS Resolver</h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="Python" color="bg-yellow"></Badge>
            </div>
          </ImageCard>
          <ImageCard imageUrl={'/malnutrition.jpg'} color="bg-white">
            <Link href="https://ieeexplore.ieee.org/document/9788386">
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">
                Malnutrition detection among children
              </h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="Python" color="bg-yellow"></Badge>
              <Badge badgeText="Django" color="bg-blue"></Badge>
              <Badge badgeText="D3.js" color="bg-green"></Badge>
            </div>
          </ImageCard>
          <ImageCard imageUrl={'/significance-places.jpg'} color="bg-white">
            <Link href={'https://github.com/vedantsawant/cse519-dsf-project'}>
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">
                Significance Score of Places
              </h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="Python" color="bg-yellow"></Badge>
              <Badge badgeText="Flask" color="bg-teal-400"></Badge>
            </div>
          </ImageCard>
          <ImageCard imageUrl={'/biometric_auth.png'} color="bg-white">
            <Link href={'https://github.com/vedantsawant/Face_Voice_Auth'}>
              <h1 className="text-lg lg:text-xl font-syne font-medium truncate overflow-clip">
                Multimodal Biometric Authentication System
              </h1>
            </Link>
            <div className="flex gap-2.5 my-5">
              <Badge badgeText="Django" color="bg-blue"></Badge>
              <Badge badgeText="Android" color="bg-emerald-400"></Badge>
              <Badge badgeText="Java" color="bg-amber-500"></Badge>
            </div>
          </ImageCard>
        </div>
      </div>
    </section>
  )
}
