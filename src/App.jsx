// App.jsx

import { useState } from 'react'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import './styles/App.css'
import Editor from './components/Editor.jsx'
import Preview from './components/Preview.jsx'
import { initialPersonalDetails, initialWorkEx, initalEducation, initialSkills } from './details.js'

function App() {
  const [details, setDetails] = useState(initialPersonalDetails)
  const [workexDetails, setWorkexDetails] = useState(initialWorkEx)
  const [eduDetails, setEduDetails] = useState(initalEducation);
  const [skills, setSkills] = useState(initialSkills)

  const previewRef = useRef(null)
  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `${details.name || "Resume"}`
  });

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
      startDate: "2020-10",
      endDate: "2022-12",
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
        return {...education, [e.target.name]: e.target.value}
      }
      return education
    }))
  }

  function handleAddEdu() {
    let newEducation = {
      id: crypto.randomUUID(),
      degree: "",
      university: "",
      location: "",
      startDate: "2018-07",
      endDate: "2022-08",
    }
    setEduDetails([...eduDetails, newEducation])
  }

  function handleDelEdu(id) {
    setEduDetails(eduDetails.filter(education => education.id !== id))
  }

  function handleSkillChange(e, id) {
    setSkills(skills.map(skill => {
      if(skill.id === id) {
        return {...skill, skill: e.target.value}
      }
      return skill
    }))
  }

  function handleAddSkill() {
    let newSkill = {id: crypto.randomUUID(), skill: ""}
    setSkills([...skills, newSkill])
  }

  function handleDelSkill(id) {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  return (
    <div className='app'>
      <Editor details={details} 
      handleDetailsChange={handleDetailsChange} 
      workexDetails={workexDetails} 
      handleWorkexChange={handleWorkexChange}
      handleAddExp={handleAddExp}
      handleDelExp={handleDelExp}
      eduDetails={eduDetails}
      handleEduChange={handleEduChange}
      handleAddEdu={handleAddEdu}
      handleDelEdu={handleDelEdu}
      skills={skills} handleSkillChange={handleSkillChange} handleAddSkill={handleAddSkill} handleDelSkill={handleDelSkill}/>

      <Preview 
      details={details} 
      workexDetails={workexDetails} 
      eduDetails={eduDetails} 
      skills={skills}
      previewRef={previewRef}
      handlePrint={handlePrint}/>
    </div>
  )
}

export default App
