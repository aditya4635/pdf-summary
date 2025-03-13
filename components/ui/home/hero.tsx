import React from 'react'
import { Button } from '../button'
import {  ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '../badge'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className='mb-0'>
      <div className='py-12 lg-py-24 max-w-5xl mx-uto px-4 sm:px-6 lg:px-8 lg:pt-12'>
      <div className='flex flex-col items-center justify-center h-screen mb-0 '>
        <div className='mb-10 relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 mt-12'>
        <Badge className='flex items-center justify-center m-5 bg-transparent animate-pulse text-xl font-bold '>
        <Sparkles className='h-10 w-19 mr-1 text-rose-500 animate-pulse '/>
        <p>Powered by AI</p>
        </Badge>
        </div>
        <h1 className='text-4xl text-center   text-rose-500 font-bold  mt-0 pt-0 px-5 container mx-auto mb-12 '>Transform PDF Into Concise Summary</h1>
        <h2 className='font-bold pt-0 mt-0 text-center text-gray-600 mb-12'>Get a beautiful summary reel of the PDF in seconds</h2>
        <Button variant={'link'} className='bg-linear-to-r from-slate-900 to-rose-500 font-bold hover:from-rose-500 hover:to-slate-900 text-white border-2 border-rose-500 pr-5 rounded-full p-5  hover:no-underline '>
          <Link href='/#pricing' className='flex items-center justify-center '>
          <span className='font-bold text-base  '>Try Adiya</span>
          <ArrowRight className='h-6 w-6 ml-2'/>
          </Link>
          </Button>
      </div>
      </div>
    </section>
  )
}

export default Hero
