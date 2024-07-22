import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import Footer from './components/Footer'
import { generateWorkout } from './utils/functions'
import Button from './components/Button'

function App() {
  const [workout, setWorkout] = useState(null)
  const [split, setSplit] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ split, muscles, goals })
    console.log(newWorkout)
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        split={split}
        setSplit={setSplit}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout={updateWorkout}      
      />
      {workout && <Workout workout={workout} />}
      {workout && (
        <Button 
          text={'Start Over'} 
          func={() => {
            setWorkout(null); // Reset workout
            window.location.href = '/#generate';
          }}  
          className="mb-8" 
        />
      )}
      <Footer className="mt-8" />
    </main>
  )
}

export default App
