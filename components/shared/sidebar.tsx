'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants/index'
import { link } from 'fs'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
const Sidebar = () => {
    const pathname = usePathname()
    return (
        <aside className=' sidebar '>
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className=' sidebar-logo'>
                    <Image width={180} height={28} alt='logo' src="/assets/images/logo-text.svg"></Image>
                </Link>
                <nav className=' sidebar-nav'>
                    <SignedIn>
                        <ul className=" sidebar-nav_elements space">
                            {
                                navLinks.slice(0, 6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`sidebar-nav_element  group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                            <Link className=' sidebar-link' href={link.route}>
                                                <Image src={link.icon} width={24} height={24} alt='logo' className={`${isActive && "brightness-200"}`} />
                                                <span className=' sidebar-link_text'>{link.label}</span>

                                            </Link>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul>
                            {
                                navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`sidebar-nav_element  group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                            <Link className=' sidebar-link' href={link.route}>
                                                <Image src={link.icon} width={24} height={24} alt='logo' className={`${isActive && "brightness-200"}`} />
                                                <span className=' sidebar-link_text'>{link.label}</span>

                                            </Link>

                                        </li>
                                    )
                                })
                            }
                            <li className=' text-gray-700 cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName /> </li>
                        </ul>


                    </SignedIn>
                    <SignedOut>
                        <Button asChild className=' button bg-purple-gradient '>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar