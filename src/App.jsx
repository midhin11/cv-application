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

function WorkExperience({workexDetails}) {
  const formattedStartDate = new Date(workexDetails.startDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  const formattedEndDate = new Date(workexDetails.endDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (<div>
    <h2>Work Experience</h2>
    <div className='workex-prev'>
      <div className="workex-intro">
        <div><span className='company'>{workexDetails.role}</span> - <span className='role'>{workexDetails.company}</span></div>
        <div>{formattedStartDate} - {formattedEndDate}</div>
      </div>
      <div>{workexDetails.jobDesc}</div>
    </div>
  </div>)
}

function Preview({details, workexDetails}) {
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
      <WorkExperience workexDetails={workexDetails} />
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
    about: "Results-driven Software Developer with 4+ years of experience designing, developing, and maintaining scalable web applications. Proficient in JavaScript, React, Node.js, and modern development practices, with a strong foundation in problem-solving and software design. Passionate about building user-focused applications, writing clean and maintainable code, and collaborating with cross-functional teams to deliver high-quality software solutions."
  }
  let initialWorkEx = {
    role: "Software Developer",
    company: "Banana Co.",
    startDate: "2022-11-21",
    endDate: "2024-03-21",
    jobDesc: `Designed and developed full-stack web applications using React, Node.js, and Express.
Created RESTful APIs and integrated databases such as PostgreSQL and MongoDB. /n
Implemented authentication, authorization, and secure data handling.
Wrote modular, reusable, and well-documented code following industry best practices.
Collaborated with product managers and QA engineers to deliver production-ready features.
Monitored application performance and resolved production issues to ensure reliability.`
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
      <Preview details={details} workexDetails={workexDetails}/>
    </div>
  )
}

export default App
