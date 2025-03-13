import { Button } from '../button'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Ctasection = () => {
  return (
    <section>
    <div className='py-12 lg-py-24 max-w-5xl mx-uto px-4 sm:px-6 lg:px-8 lg:pt-12' >
      <div className='flex flex-col items-center justify-center space-y-4 text-center mx-auto '>
        <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Ready to save hours of reading time

            </h2>
            <p className='mx-auto max-w-[700px] text-gray-400'> transform lengthy documents into clear , actionable insights with our AI powered summariser

            </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <div>
                <Button size="lg" variant={'link'} className='bg-linear-to-r from-slate-900 to-rose-500 font-bold hover:from-rose-500 hover:to-slate-900 text-white border-2 border-rose-500 pr-5 rounded-full p-5  hover:no-underline '>
                <Link href='/#pricing' className='flex items-center justify-center '>
                Get Started{''}
                <ArrowRight className='h-6 w-6 ml-2'/>
                </Link>
                
                </Button>
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Ctasection
