import { useState } from 'react'
import './App.css'
import Editor from './components/Editor.jsx'

function Summary({details}) {
  return(
    <div className='summary'>
      <h2>Professional Summary</h2>
      <p>{details.about}</p>
    </div>
  )
}

function Preview({ details }) {
  const contactInfo = [
    details.location,
    details.email,
    details.phone,
    details.linkedIn,
  ];
  let filteredContactInfo = contactInfo.filter(info => info)

  return (
    <div className="preview">
      <h1>{details.name}</h1>
      <h3>{details.position}</h3>
      <h4>{filteredContactInfo.map((info, index) => {
        if (info === details.linkedIn) {
          return <li key={index}><a href={`https://linkedin.com/in/${details.linkedIn}`} rel='noopener noreferrer' target='blank'>linkedin.com/{details.linkedIn}</a></li>
        } 
        else {
          let notLast = true
          if (index === filteredContactInfo.length - 1) notLast = false
          return (<li key={index}>
            {notLast
              ? <span>{info} <span> | </span></span>
              : <span>{info}</span>}
          </li>)
        }
      })}</h4>
      
      <Summary details={details}/>
    </div>
  );
}

function App() {
  let initialPersonalDetails = {
    name: "Silpa S",
    position: "Team Lead - Industiral Solutions",
    location: "Palakkad, Kerala",
    email: "silpa007@hotmail.com",
    phone: "+91 90611 77878",
    linkedIn: "midhin-lal",
    about: "Industrial Solutions Team Lead with 4 years of experience leading cross-functional teams, managing industrial projects, and driving product development initiatives from planning through execution. Skilled in project management, product strategy, Agile methodologies, stakeholder communication, and process improvement, with a Professional Scrum Master (PSM I) certification and a strong focus on delivering high-quality solutions that improve operational efficiency and business outcomes."
  }
  let initialWorkEx = {
    role: "Software Developer",
    company: "Banana Co.",
    startDate: "",
    endDate: "",
    jobDesc: "lorem"
  }

  const [details, setDetails] = useState(initialPersonalDetails)
  const [workexDetails, setWorkexDetails] = useState(initialWorkEx)

  function handleDetailsChange(e) {
    setDetails({...details, [e.target.name]: e.target.value,});
  }

  function handleWorkexChange (e) {
    setWorkexDetails({...workexDetails, [e.target.name]: e.target.value})
  }

  return (
    <div className='app'>
      <Editor details={details} workexDetails={workexDetails}
      handleDetailsChange={handleDetailsChange} 
      handleWorkexChange={handleWorkexChange}/>
      <Preview details={details}/>
    </div>
  )
}

export default App
