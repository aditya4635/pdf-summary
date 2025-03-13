import { BrainCircuit, FileOutput, FileText } from 'lucide-react'
import React, { ReactNode } from 'react'

type Steps ={
    icon: ReactNode;
    label:string;
    description:string;
};

const steps:Steps[] = [
    { 
        icon:<FileText size={64} strokeWidth={1.5} />,
        label:'Upload a PDF',
        description:'simply drag and drop the pdf here'
    },
    {
        icon:<BrainCircuit size={64} strokeWidth={1.5} />,
        label:'AI analysis',
        description:'our advaced ai processes and anayses you pdf instantly' 
    },
    {
        icon:<FileOutput size={64} strokeWidth={1.5} />,
        label:'Get summary',
        description:'recieve a clear summary of the page'   
    }
]







const Work = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50'>
    <div className='mb-0 mx-10 flex flex-col items-center justify-center text-center pt-40'>
      <h2 className='text-center text-3xl font-bold text-rose-500 '>How it works</h2>
      <h1 className='text-base m-7'>Transform any PDF inti an easy to digest summary in three simple steps</h1>
      <div className='flex flex-col items-center justify-center space-y-4 mx-auto '>
       {steps.map((step, index) => (
         <StepItem key={index} {...step} />
       ))}

      </div>
    </div>
    </section>
  )
}
function StepItem({icon,label,description}:Steps) {
    return (
        <div className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50  transition-colors group w-full flex flex-col items-center justify-center space-y-4 mx-auto '>
            <div className='flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-rose-500 to-transparent group-hover:from-rose-500/20 transition-colors'>
            <div >
                {icon}
            </div>
            </div>
            <h4>{label}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Work
