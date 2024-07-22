import React from 'react'

export default function Footer({ className }) {
  return (
    <footer className={`bg-slate-950 text-white text-sm text-center p-4 ${className}`}>
        <div className='flex flex-cols justify-center'>
            <a href="https://www.linkedin.com/in/vaibhav-nk/" target="_blank" rel="noopener noreferrer">
                <button className="py-3">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                </button>
            </a>
            <a href="https://github.com/Vaibhav-nk-git" target="_blank" rel="noopener noreferrer">
                <button className="py-3">
                    <i className="pl-8 fa-brands fa-github fa-2x"></i>
                </button>
            </a>
        </div>
        <p className='pt-2'>© 2024 Gymnormous</p>
    </footer>
  )
}
