import React from 'react'

export default function SectionWrapper(props) {
  const {children,header,title,id} =props;  
  return (
    <section id={id} className='min-h-screen flex flex-col gap-10'>
        <div className='bg-slate-900 py-10 flex flex-col gap-4 justify-center items-center'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>{title[0]} <span className='text-yellow-400'>{title[1]}</span> {title[2]}</h2>

        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>      
              {children}
        </div>
    </section>
  )
}
