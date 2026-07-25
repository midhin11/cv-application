// App.jsx

import { useState } from 'react'
import './styles/App.css'
import Editor from './components/Editor.jsx'
import Preview from './components/Preview.jsx'
import { initialPersonalDetails, initialWorkEx, initalEducation } from './details.js'

function App() {
  const [details, setDetails] = useState(initialPersonalDetails)
  const [workexDetails, setWorkexDetails] = useState(initialWorkEx)
  const [eduDetails, setEduDetails] = useState(initalEducation);

  function handleDetailsChange(e) {
    setDetails({...details, [e.target.name]: e.target.value,});
  }

  function handleWorkexChange (e, id) {
    setWorkexDetails(workexDetails.map(work => {
      if(work.id === id) {
        return {...work, [e.target.name]: e.target.value}
      }
      return work
    }))
  }

  function handleAddExp() {
    let newExperience = {
      id: crypto.randomUUID(),
    role: "",
    company: "",
    startDate: "2020-10-10",
    endDate: "2022-12-10",
    jobDesc: ``
    }
    setWorkexDetails([...workexDetails, newExperience])
  }

  function handleDelExp(id) {
    setWorkexDetails(workexDetails.filter(work => work.id !== id))
  }

  function handleEduChange(e, id) {
    setEduDetails(eduDetails.map(education => {
      if (education.id === id) {
        return {...eduDetails, [e.target.name]: e.target.value}
      }
      return education
    }))
  }

  return (
    <div className='app'>
      <Editor details={details} 
      workexDetails={workexDetails} 
      eduDetails={eduDetails}
      handleDetailsChange={handleDetailsChange} 
      handleWorkexChange={handleWorkexChange}
      handleAddExp={handleAddExp}
      handleDelExp={handleDelExp}
      handleEduChange={handleEduChange}/>

      <Preview details={details} workexDetails={workexDetails} eduDetails={eduDetails}/>
    </div>
  )
}

export default App
