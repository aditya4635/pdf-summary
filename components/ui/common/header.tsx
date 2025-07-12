"use client";
import NavLink from './nav-link';
import React from 'react'
import { FileText } from 'lucide-react'

import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Header = () => {

  return (
    
    <nav className="flex justify-between py-6 px-8 items-center lg:px-8 font-sans" style={{ fontFamily: 'Inter, Segoe UI, sans-serif', fontWeight: 600, fontSize: '1.15rem' }}> 
      <div className='flex items-center'>
        <NavLink href="/" className='p-1 my-auto flex px-1 lg:px-2 !text-foreground font-bold text-xl' style={{ fontFamily: 'Inter, Segoe UI, sans-serif' }}>
          <FileText size={24} className='!text-foreground hover:rotate-12 transform transition duration-200 ease-in-out'/>
          <span className='!text-foreground font-bold ml-2'>Summy</span>
        </NavLink>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex space-x-8 items-center'>
          <NavLink href="/#pricing" className='!text-foreground font-bold'>Pricing</NavLink>
          <SignedIn>
            <NavLink href="/dashboard" className='!text-foreground font-bold'>Your Summaries</NavLink>
          </SignedIn>
        </div>
      </div>
      <div>
        <SignedIn>
          <div className='flex space-x-4 items-center justify-center'>
            <NavLink href="/upload" className='!text-foreground font-bold'>Upload a PDF</NavLink>
            <div className='!text-foreground font-bold'>PRO</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
        <SignedOut>
          <div>
            <NavLink href="/sign-in" className='!text-foreground font-bold'>Sign In</NavLink>
          </div>
        </SignedOut>
      </div>
    </nav>
  )
}

export default Header
