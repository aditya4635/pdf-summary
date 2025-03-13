"use client";
import NavLink from './nav-link';
import React from 'react'
import { FileText } from 'lucide-react'

import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Header = () => {

  return (
    
    <nav className='flex justify-between py-6 px-8 items-center lg:px-8'> 
      
      <div className='flex items-center '>
      <NavLink href="/" className='p-1 my-auto flex px-1 lg:px-2 '>
        <FileText size={20} className='text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out'/>
        <span className='text-gray-900 font-bold '>Adiya</span></NavLink>
      </div>
      <div className='flex space-x-4'>
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries
          </NavLink>
        </SignedIn>
      </div>
      <div>
         <SignedIn>
          <div className='flex space-x-4 items-center justify-center'>
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>PRO</div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            </SignedIn>
            <SignedOut>
            <div>
              <NavLink href="/sign-in">Sign In</NavLink>
            </div>
          </SignedOut>
        
      </div>
    </nav>
  )
}

export default Header
