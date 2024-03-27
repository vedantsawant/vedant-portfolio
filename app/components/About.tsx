'use client'
import Button from './Button'

export default function About() {
  return (
    <section className="bg-white item py-10 content">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-6 font-light font-syne text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Hi, my name is Vedant
          </p>
          <h1 className="max-w-2xl mb-4 text-6xl font-archivo font-black tracking-tight leading-none md:text-7xl xl:text-8xl">
            I BUILD WEB APPS
          </h1>
          <p className="max-w-2xl mb-6 font-light font-syne text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their
            payment stack.
          </p>
          <Button
            color="bg-violet"
            onClick={() => {
              console.log('btn click')
            }}
          >
            Resume
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://www.muraldecal.com/en/img/drball001-png/folder/products-detalle-png/wall-stickers-for-kids-dragon-ball-son-goku.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}
