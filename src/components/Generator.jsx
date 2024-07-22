import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/data';
import Button from './Button';

function Header(props){
    const {index,title,description} = props;
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-centers justify-center gap-2'>
                <p className='text-3xl sm:tex-4xl md:text-5xl font-semibold text-orange-500'>{index}</p>
                <h4 className='text-xl sm:text-2xl ms:text-3xl' >{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const {split,setSplit,muscles,setMuscles,goals,setGoals,updateWorkout} = props;
    const [showModal,setShowModal]=useState(false)

    //let showModal = false

    function toggleModal(){
        setShowModal(!showModal)
    }
    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val=>val!=muscleGroup))
            return
        }
        if(muscles.length>=3){
            return
        }
        if(split !== "individual"){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
        
        setMuscles([...muscles,muscleGroup])

        if(muscles.length === 2){
            setShowModal(false)
        }
    }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s','Pump','o\'clock']}>
        <Header index={"01"} title={"Pick your Split "} description={'select your workout for the session'}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'> 
        {Object.keys(WORKOUTS).map((type,typeIndex)=>{
            return(
                <button onClick={()=>{setSplit(type)}} className={`bg-yellow-500 duration-200 px-4 py-3 rounded-lg border-4 ${type === split ? 'border-white' : 'border-yellow-500 hover:border-white'}`} key={typeIndex}>
                    <p className='capitalize' style={{color:'black'}}>{type.replaceAll('_'," ")}</p>
                </button>
            )
        })}
        </div>


        <Header index={"02"} title={"Target Muscles "} description={'select the muscles to isolate and annihilate'}/>
        <div className='bg-slate-950 border border-solid border-yellow-400 rounded-lg flex flex-col'>
    <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
        <p className='capitalize' >{muscles.length ==0 ? 'SELECT MUSCLE GROUPS':muscles.join(' ')}</p>
        <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
    </button>
    {showModal && (
        <div className='flex flex-col px'>
            {(split === "individual" ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex) => {
                return (
                    <button 
                        onClick={() => { updateMuscles(muscleGroup) }} 
                        key={muscleGroupIndex} 
                        className={`hover:text-yellow-600 py-2 duration-200 ${muscles.includes(muscleGroup) ? 'text-yellow-600' : ''}`}
                    >
                        <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                    </button>
                )
            })}
        </div>
    )}
</div>



        <Header index={"03"} title={"Training Intent"} description={'Select the style of your workout'}/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'> 
        {Object.keys(SCHEMES).map((type,typeIndex)=>{
            return(
                <button onClick={()=>{setGoals(type)}} className={`bg-yellow-500 duration-200 px-4 py-3 rounded-lg border-4 ${type === goals ? 'border-white' : 'border-yellow-500 hover:border-white'}`} key={typeIndex}>
                    <p className='capitalize' style={{color:'black'}}>{type.replaceAll('_'," ")}</p>
                </button>
            )
        })}
        </div>
        <Button func = {updateWorkout} text={"Formulate"}></Button>

    </SectionWrapper>

    )
}