import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'
import Cv from './components/cv'

function App() {

  const [data,setData]=useState({name:"",email:"",phone:[],address:"",schoolname:"",
    degree:"", schoolstartdate:"",schoolenddate:"",schooladdress:"",companyname:""
    , position:"",companystartdate:"",companyenddate:"",companyaddress:"",description:""
    })

  function handleChange(event){
   let value=event.target.value
   let iname= event.target.name
   const newdata={...data,[iname]:value}
   setData(newdata)
    
  }
  return (
  <div className='appcontainer'>
    <div className='leftcontainer'>
      <PersonalDetails 
      data={data}
      handleChange={handleChange}
          />
    <Education data={data}
      handleChange={handleChange}></Education>
    <Experience data={data}
      handleChange={handleChange}></Experience>
    </div>
    <div className="rightcontainer">
      <Cv data={data}></Cv>

    </div>
    

  </div>
  )
}

export default App
