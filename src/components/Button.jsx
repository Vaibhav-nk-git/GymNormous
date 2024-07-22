import React from 'react'

export default function Button(props) {
    const {text , func, className} =props;
  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-yellow-400 border-solid blueShadow duration-300'><p>{text}</p></button>
  )
}

