import { Github, Linkedin, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between px-12 py-2 border-b'>
        <div className='w-14'>
            <Image 
                src="/assets/logo.png"
                alt="logo"
                width={120}
                height={120}
                className='w-full object-contain'
            />
        </div>

        <div className='flex items-center gap-2'>
            <Link href="" className='border p-2 rounded-md hover:bg-border'>
                <Github size={20} />
            </Link>
            <Link href="" className='border p-2 rounded-md hover:bg-border'>
                <Linkedin size={20} />
            </Link>
            <Link href="" className='border p-2 rounded-md hover:bg-border'>
                <Moon size={20} />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar