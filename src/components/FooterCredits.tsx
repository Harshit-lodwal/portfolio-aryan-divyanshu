'use client'

import Image from 'next/image'

export default function FooterCredits() {
  return (
    <footer className="sm:px-8 px-4 py-3 sm:py-4">

      {/* Main Footer Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/footer1.png"
          alt="Footer credits"
          width={900}
          height={200}
          className="w-full max-w-2xl h-auto opacity-95"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>

      {/* Small NASA image in corner */}
      <a
        href="/nasa.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className=" bottom-3 right-3 z-50 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/nasa.jpg"
          alt="NASA"
          width={90}
          height={100}
          className="object-contain"
        />
      </a>

    </footer>
  )
}