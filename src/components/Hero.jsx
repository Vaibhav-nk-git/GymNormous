import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'> 
        <p>IT'S TIME TO GET YOU</p>
        <h1 className='uppercase font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl'>GYM<span className='text-yellow-400'>NORMOUS</span></h1>
        </div>
        <p className='text-sm md:text-base font-light' >I hereby acknowledgement that I may become <span className='text-yellow-400'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-yellow-400'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors</p>
        <Button func={()=>window.location.href='/#generate'} text={"Accept & Begin"}></Button>
    </div>
  )
}