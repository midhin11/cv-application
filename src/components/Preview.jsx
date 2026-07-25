// Preview.jsx
import { LinkedInSvg } from "../svg.jsx";

function Summary({details}) {
  return(
    <div className='summary'>
      <h2>Professional Summary</h2>
      <p>{details.about}</p>
    </div>
  )
}

function WorkExperience({workexDetails}) {
  return workexDetails.map(experience => {
    const formattedStartDate = new Date(experience.startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
    const formattedEndDate = new Date(experience.endDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });

    return (
      <div className="workex-prev" key={experience.id}>
        <div className="workex-intro">
            <div><span className='company'>{experience.role}</span> - <span className='role'>{experience.company}</span></div>
            <div>{formattedStartDate} - {formattedEndDate}</div>
        </div>
        <div>{experience.jobDesc}</div>
      </div>
    )
  })
}

function Education({eduDetails}){
  return eduDetails.map(education => {
    const formattedStartDate = new Date(education.startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
    const formattedEndDate = new Date(education.endDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });

    return (
      <div className="edu-prev" key={education.id}>
        <div className="edu-intro">
          <div className="degree">{education.degree}</div>
          <div className="edu-date">{formattedStartDate} - {formattedEndDate}</div>
        </div>
        <div className="edu-uni">{education.university} - {education.location}</div>
      </div>
    )
  })
}

function Skills({skills}) {
  return skills.map(skill => {
    return <div className="skill-prev">• {skill.skill}</div>
  })
}

export default function Preview({details, workexDetails, eduDetails, skills}) {
  const contactInfo = [
    details.location,
    details.email,
    details.phone,
    details.linkedIn,
  ];
  let filteredContactInfo = contactInfo.filter(info => info)
  let linkedinElement = <span className="intro-link"><LinkedInSvg/><span>{details.linkedIn}</span></span>

  return (
    <div className="prev-container">
      <div className="preview">
        <h1>{details.name}</h1>
        <h3>{details.position}</h3>
        <h4>{filteredContactInfo.map((info, index) => {
          if (info === details.linkedIn) {
            return <li key={index}><a href={`https://linkedin.com/in/${details.linkedIn}`} rel='noopener noreferrer' target='blank'>{linkedinElement}</a></li>
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
        <h2>Work Experience</h2>
        <WorkExperience workexDetails={workexDetails} />
        <h2>Education</h2>
        <Education eduDetails={eduDetails}/>
        <h2 className="skills-prev-header">Skills</h2>
        <Skills skills={skills}/>
      </div>
    </div>
  );
}
