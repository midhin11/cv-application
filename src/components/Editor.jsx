// Editor.jsx

import { PersonSvg, WorkSvg, EducationSvg, DelButton, SkillsSvg } from "../svg.jsx";
import { useState } from "react";

export default function Editor({
  details, handleDetailsChange, 
  workexDetails, handleWorkexChange, handleAddExp, handleDelExp,
  eduDetails, handleEduChange, handleAddEdu, handleDelEdu,
  skills, handleSkillChange, handleAddSkill, handleDelSkill
}) {
  return (
    <div className='editor'>
      <div className="page-name">Resume Builder</div>
      <div className="tagline">Build a professional resume in minutes</div>

      <PersonalInfoEdit details={details} handleDetailsChange={handleDetailsChange}/>

      <div className="editor-card">
        <div className="section-header"><WorkSvg/><h3>Work Experience</h3></div>
        <div className="section-info">
          {workexDetails.map((work) => (
            <WorkExperienceEditItem
            key={work.id}
            work={work}
            handleWorkexChange={handleWorkexChange}
            handleDelExp={handleDelExp}
            />
          ))}
          <button className="add-ex" onClick={handleAddExp}>
            + Add experience
          </button>
        </div>
      </div>

      <div className="editor-card">
        <div className="section-header"><EducationSvg/><h3>Eduation</h3></div>
        <div className="section-info">
          {eduDetails.map((education) => (
            <EducationEditItem
            key={education.id}
            education={education}
            handleEduChange={handleEduChange}
            handleDelEdu={handleDelEdu}
            />
          ))}
          <button className="add-edu" onClick={handleAddEdu}>
            + Add Education
          </button>
        </div>
      </div>
      
      <SkillsEdit skills={skills} handleSkillChange={handleSkillChange} handleAddSkill={handleAddSkill} handleDelSkill={handleDelSkill}/>
            
    </div>
  )
}

function PersonalInfoEdit({details, handleDetailsChange}){
  const [expanded, setExpanded] = useState(false) 
  function handleExpanded() {
    setExpanded(!expanded)
  }

  return (
    <div className="generalInfo">
      <div className="editor-header" onClick={handleExpanded}>
        <PersonSvg/>
        <h3>General Information</h3>
        <span className={expanded ? "arrow expanded" : "arrow"}>▶</span>
      </div>

      {expanded && <div className="form-editor-section">
        <div className="form-group">
          <label htmlFor='name'>Name: </label>
          <input type="text" name="name" id="name" value={details.name} onChange={handleDetailsChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='curr-position'>Position: </label>
          <input type="text" name="position" id="position" value={details.position} onChange={handleDetailsChange}/>
        </div>
        <div className="form-group">
          <label htmlFor=''>Location: </label>
          <input type="text" name="location" id="location" value={details.location} onChange={handleDetailsChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='email'>Email: </label>
          <input type="text" name="email" id="email" value={details.email} onChange={handleDetailsChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='phone'>Phone: </label>
          <input type="text" name="phone" id="phone" value={details.phone} onChange={handleDetailsChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='linkedIn'>LinkedIn: </label>
          <input type="text" name="linkedIn" id="linkedIn" value={details.linkedIn} onChange={handleDetailsChange}/>
        </div>

        <div className='summary-edit'>
            <label htmlFor='about'>About you: </label>
            <textarea type="text" name="about" id="about" value={details.about} onChange={handleDetailsChange}></textarea>
        </div> 
      </div>}
    </div>
  )
}

function SkillsEdit({skills, handleSkillChange, handleAddSkill, handleDelSkill}) {
  const [expanded, setExpanded] = useState(false) 
  function handleExpanded() {
    setExpanded(!expanded)
  }

  return (
    <div className="skills">
      <div className="skills-header" onClick={handleExpanded}>
        <SkillsSvg/>
        <h3>Skills</h3>
        <span className={expanded ? "arrow expanded" : "arrow"}>▶</span>
      </div>

      {expanded && <>
        {skills.map(skill => {
          return (<div className="skill" key={skill.id}>
            <input type="text" name="skill" id="" value={skill.skill} onChange={e => (handleSkillChange(e, skill.id))}/>
            <button onClick={() => handleDelSkill(skill.id)}><DelButton/></button>
          </div>)
        })}
        <button className="add-edu" onClick={handleAddSkill}>
          + Add Skills
        </button>
      </>}
    </div>
  )
}


function WorkExperienceEditItem({work, handleWorkexChange,  handleDelExp}) {
  const [expanded, setExpanded] = useState(false);
  function handleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="experience-edit">
      <div className="item-header" onClick={handleExpanded}> 
        <div>{work.role || "New Experience"}</div>
        <span className={expanded ? "arrow expanded" : "arrow"}>▶</span> 
      </div>

      {expanded && <div className="form-editor-section">
        <div className="form-group">
          <label htmlFor="role">Role: </label>
          <input type="text" name="role" id="role" value={work.role} onChange={(e) => (handleWorkexChange(e, work.id))}/>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company: </label>
          <input type="text" name="company" id="company" value={work.company} onChange={(e) => (handleWorkexChange(e, work.id))}/>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start: </label>
          <input type="month" name="startDate" id="startDate" value={work.startDate} onChange={(e) => (handleWorkexChange(e, work.id))}/>
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End: </label>
          <input type="month" name="endDate" id="endDate" value={work.endDate} onChange={(e) => (handleWorkexChange(e, work.id))}/>
        </div>
        <div className="form-group">
          <label htmlFor="jobDesc">Job Description: </label>
          <textarea type="text" name="jobDesc" id="jobDesc" value={work.jobDesc} onChange={(e) => (handleWorkexChange(e, work.id))}></textarea>
        </div>
        <div className="del-btn">
          {<button onClick={() => handleDelExp(work.id)}><DelButton/></button>}
        </div>
      </div>}

    </div>
  ) 
}

function EducationEditItem ({education, handleEduChange, handleDelEdu}) {
  const [expanded, setExpanded] = useState(false)
  function handleExpanded() {
    setExpanded(!expanded)
  }

  return(
    <div className="education-edit">
      <div className="item-header" onClick={handleExpanded}> 
        <div>{education.degree || "New Education"}</div>
        <span className={expanded ? "arrow expanded" : "arrow"}>▶</span> 
      </div>

      {expanded && <div className="form-editor-section">
        <div className="form-group">
          <label htmlFor="degree">Degree: </label>
          <input type="text" name="degree" id="degree" value={education.degree} onChange={(e) => (handleEduChange(e, education.id))} />
        </div>  
        <div className="form-group">
          <label htmlFor="university">University: </label>
          <input type="text" name="university" id="university" value={education.university} onChange={(e) => (handleEduChange(e, education.id))}/>
        </div>  
        <div className="form-group">
          <label htmlFor="location">Location: </label>
          <input type="text" name="location" id="location" value={education.location} onChange={(e) => (handleEduChange(e, education.id))}/>
        </div>  
        <div className="form-group">
          <label htmlFor="startDate">Start: </label>
          <input type="month" name="startDate" id="startDate" value={education.startDate} onChange={(e) => (handleEduChange(e, education.id))}/>
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End: </label>
          <input type="month" name="endDate" id="endDate" value={education.endDate} onChange={(e) => (handleEduChange(e, education.id))}/>
        </div>
        <div className="del-btn">
          {<button onClick={() => handleDelEdu(education.id)}><DelButton/></button>}
        </div>
      </div>}
    
    </div>
  )
}