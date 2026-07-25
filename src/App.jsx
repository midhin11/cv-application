// App.jsx

import { useState } from 'react'
import './styles/App.css'
import Editor from './components/Editor.jsx'
import Preview from './components/Preview.jsx'

function App() {
  let initialPersonalDetails = {
    name: "Silpa S",
    position: "Team Lead - Industiral Solutions",
    location: "Palakkad, Kerala",
    email: "silpa007@hotmail.com",
    phone: "+91 90611 77878",
    linkedIn: "midhin-lal",
    about: "Results-driven Software Developer with 4+ years of experience designing, developing, and maintaining scalable web applications. Proficient in JavaScript, React, Node.js, and modern development practices, with a strong foundation in problem-solving and software design. Passionate about building user-focused applications, writing clean and maintainable code, and collaborating with cross-functional teams to deliver high-quality software solutions."
  }
  let initialWorkEx = [{
    id: crypto.randomUUID(),
    role: "Software Developer",
    company: "Banana Co.",
    startDate: "2022-11-21",
    endDate: "2024-03-21",
    jobDesc: `Designed and developed full-stack web applications using React, Node.js, and Express.
Created RESTful APIs and integrated databases such as PostgreSQL and MongoDB.
Implemented authentication, authorization, and secure data handling.
Wrote modular, reusable, and well-documented code following industry best practices.
Collaborated with product managers and QA engineers to deliver production-ready features.
Monitored application performance and resolved production issues to ensure reliability.`
  }]

  const [details, setDetails] = useState(initialPersonalDetails)
  const [workexDetails, setWorkexDetails] = useState(initialWorkEx)

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
    startDate: "1000-10-10",
    endDate: "1005-12-10",
    jobDesc: ``
    }
    setWorkexDetails([...workexDetails, newExperience])
  }

  function handleDelExp() {
    setWorkexDetails(workexDetails.pop())
  }

  return (
    <div className='app'>
      <Editor details={details} workexDetails={workexDetails}
      handleDetailsChange={handleDetailsChange} 
      handleWorkexChange={handleWorkexChange}
      handleAddExp={handleAddExp}
      handleDelExp={handleDelExp}/>

      <Preview details={details} workexDetails={workexDetails}/>
    </div>
  )
}

export default App
