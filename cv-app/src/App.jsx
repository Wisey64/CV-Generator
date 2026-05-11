import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
  <div>
    <PersonalDetails/>
    <Education></Education>
    <Experience></Experience>

  </div>
  )
}

export default App
