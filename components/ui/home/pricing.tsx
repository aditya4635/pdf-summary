import Link from 'next/link';
import React from 'react'
import {cn} from '@/lib/utils';
import { ArrowRight, CheckIcon } from 'lucide-react';
const plans=[{
    id:'basic',
    name:'Basic',
    price: 9 ,
    items:['5 summaries per month',
        'standard processing',
        'email support',
    ],
    paymentLink:'',
    priceId:'',
    description:"for personal use ",
},
{
    id:'pro',
    name:'pro',
    price: 19,
    description: 'for professionals and teams',
    items:[
        'unlimited PDF summaries',
        'prioroty processing',
        '24/7 priority support',
        'markdown export',
    ],
    paymentLink:'',
    priceId:'',
},];
type PriceType={
    name:string;
    price:number;
    description:string;
    items: string[];
    id:string;
    paymentLink:string;
    priceId:string;

}; 
const PricingCard = ({
    name,
    price,
    description,
    items,
    id,
    paymentLink,
}:PriceType) => {
    return (
   
   <div className='relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300 '>
        
        <div className={cn('flex flex-col justify-between items-center gap-4 lg:gap-8 z-10 p-8 rounded-xl border-[1px] border-border bg-card shadow-lg',id==='pro' && 'border-primary gap-5 border-2')}> 
            <div className='flex flex-col justify-between items-center gap-4'>
                <p className='text-lg lg:text-xl capitalize font-bold text-primary'>{name}

                </p>
                <p className='text-base mt-2 text-muted-foreground'>
                {description}
                </p>
            </div>
        
            <div className='flex gap-2'>
            <p className='text-5xl tracking-tight font-extrabold text-foreground'>{price}</p>
            <div className='flex flex-col justify-end mb-[4px]'>
                <p className='text-xs uppercase font-semibold text-muted-foreground'>USD</p>
                <p className='text-xs text-muted-foreground'>/month</p>
                </div>
            </div>
         
            <div className='space-y-2.5 leading-relaxed text-base flex-1'>
            {items.map((items,index)=> (
                <li key={index} className='flex items-center gap-2 text-foreground'>
                    <CheckIcon size={18} className='text-primary' />
                    <span>{items}</span></li>
            ))}
            </div>
            <div className='space-y-2.5 flex justify-center w-full'>
                <Link href={paymentLink} className={cn('w-full rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground border-2 py-2',
                id==='pro'? 'border-primary': 'border-border')}>Buy Now <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    </div>
    );
};
const Pricing = () => {
  return (
    <section className='relative overflow-hidden bg-background' id='pricing'>
        <div className='py-12 lg-py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12'> 
        <div className='flex items-center justify-center w-full pb-12'>
            <h2 className='uppercase font-bold text-xl mb-8 text-primary'>Pricing</h2>
        </div>
        <div className='relative flex justify-center flex-col lg:flex-row items-center lg:item-stretch gap-8'>
           {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default Pricing
