// Preview.jsx
import { LinkedInSvg, ExportSvg } from "./svg.jsx";

export default function Preview({details, workexDetails, eduDetails, skills,
previewRef, handlePrint
}) {
  const contactInfo = [
    details.location,
    details.email,
    details.phone,
    details.linkedIn,
  ];
  let filteredContactInfo = contactInfo.filter(info => info)

  return (
    <div className="prev-container">
      <div className="export" onClick={handlePrint}>
        <ExportSvg/>
        <div>Export PDF</div>
      </div>
      <div className="preview" ref={previewRef}>
        <h1>{details.name}</h1>
        <h3 className="pos">{details.position}</h3>
        
        <div className="links">
          {filteredContactInfo.map((info, index) => (
            <span key={index}>
              {info === details.linkedIn ? (
                <a href={`https://linkedin.com/in/${details.linkedIn}`} target="_blank" rel="noopener noreferrer">
                  <span className="intro-link">
                    <LinkedInSvg />
                    <span>{details.linkedIn}</span>
                  </span>
                </a>
              ) : (
                info
              )}

              {index !== filteredContactInfo.length - 1 && (
                <span className="separator"> | </span>
              )}
            </span>
          ))}
        </div>
      
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
    const bullets = experience.jobDesc.split("\n").filter(line => line.trim() !== "")

    return (
      <div className="workex-prev" key={experience.id}>
        <div className="workex-intro">
            <div><span className='role'>{experience.role}</span> - <span className='company'>{experience.company}</span></div>
            <div>{formattedStartDate} – {formattedEndDate}</div>
        </div>
        <div className="tasks">
          {bullets.map((bullet, index) => (
            <div className="task" key={index}>
              <span>•</span>
              <p>{bullet}</p>
            </div>
          ))}
        </div>
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
          <div className="edu-date">{formattedStartDate} – {formattedEndDate}</div>
        </div>
        <div className="edu-uni">{education.university} - {education.location}</div>
      </div>
    )
  })
}

function Skills({skills}) {
  return (
    <div className="skills-list">
      {skills.map((skill, index) => {
        return <div className="skill-prev" key={index}>• {skill.skill}</div>
      })}
    </div>
  )
}
