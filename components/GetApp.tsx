import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GetApp = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full px-6 md:px-8 lg:px-16 xl:px-64 my-24">
        <h1 className="text-2xl text-border flex items-center justify-center w-full font-semibold mb-6">
          {" "}
          Get our app{" "}
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <div className="relative w-1/3 lg:w-1/4 flex items-center justify-center">
            <Image
              src="/assets/android2.png"
              alt="demo mobile"
              width={1200}
              height={800}
              className="w-full object-contain"
            />
            <Image
              src="/assets/android1.png"
              alt="demo mobile"
              width={1200}
              height={800}
              className="w-full object-contain lg:absolute lg:top-10 lg:-left-32"
            />
          </div>
          <div className="px-6 lg:w-1/2">
            <div className="flex flex-col gap-6 items-center">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus similique ullam minima consequuntur praesentium.
                Dolor eaque atque assumenda porro doloremque distinctio
                cupiditate quae, quod minus non sed omnis quis. Perspiciatis.
              </p>

              <div className="flex items-center gap-6 lg:gap-12 xl:gap-16">
                <Link
                  href=""
                  className="px-8 py-4 rounded-full bg-primary text-white"
                >
                  App store
                </Link>
                <Link
                  href=""
                  className="px-8 py-4 rounded-full bg-primary text-white"
                >
                  Play store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default GetApp