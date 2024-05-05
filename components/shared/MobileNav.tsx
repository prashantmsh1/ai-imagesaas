'use client'
import { navLinks } from "@/constants"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
const MobileNav = () => {
    const pathname = usePathname()
    return (
        <header className=' header'>
            <Link href="/" className=' flex items-center gap-2 md:py-2'>
                <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
            </Link>
            <nav className=' flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" width={24} height={24} alt='more' />
                        </SheetTrigger>
                        <SheetContent className=' sheet-content sm:w-64'>
                            <>
                                <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
                                <ul className="header-nav_elements">
                                    {
                                        navLinks.map((link) => {
                                            const isActive = link.route === pathname
                                            return (
                                                <li key={link.route} className={`${isActive && 'gradient-text'} whitespace-nowrap text-dark-700`}>
                                                    <Link className=' sidebar-link cursor-pointer' href={link.route}>
                                                        <Image src={link.icon} width={24} height={24} alt='logo' />
                                                        <span className=' sidebar-link_text'>{link.label}</span>

                                                    </Link>

                                                </li>
                                            )
                                        })
                                    }
                                    <li className=' text-gray-700 cursor-pointer gap-2 p-4'>
                                        <UserButton afterSignOutUrl='/' showName /> </li>
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
                <SignedOut>
                    <Button asChild className=' button bg-purple-gradient '>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav