import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'
import Cv from './components/cv'

function App() {
  const [data, setData] = useState({
    name: "", email: "", phone: [], address: "", summary: "",
    schoolname: "", degree: "", schoolstartdate: "", schoolenddate: "", schooladdress: "",
    companyname: "", position: "", companystartdate: "", companyenddate: "",
    companyaddress: "", description: ""
  })

  function handleChange(event) {
    const value = event.target.value
    const iname = event.target.name
    setData({ ...data, [iname]: value })
  }

  return (
    <div className='appcontainer'>
      <div className='leftcontainer'>

        {/* Brand Header */}
        <div className="app-header">
          <div className="brand">
            <div className="brand-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8" fill="none" stroke="white" strokeWidth="1.5"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="1.5"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <div className="brand-name">CVCraft</div>
              <div className="brand-sub">CV Editor</div>
            </div>
          </div>
        </div>

        <PersonalDetails data={data} handleChange={handleChange} />
        <Education data={data} handleChange={handleChange} />
        <Experience data={data} handleChange={handleChange} />
      </div>

      <div className="rightcontainer">
        <Cv data={data} />
      </div>
    </div>
  )
}

export default App
