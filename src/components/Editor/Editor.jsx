// Editor.jsx

import {WorkSvg, EducationSvg} from "../svg.jsx";
import PersonalInfoEdit from "./PersonalInfoEdit";
import WorkExperienceEditItem from "./WorkExperienceEditItem";
import EducationEditItem from "./EducationEditItem";
import SkillsEdit from "./SkillsEdit.jsx";

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
          {workexDetails.map((work, index) => (
            <WorkExperienceEditItem
            key={work.id}
            work={work}
            handleWorkexChange={handleWorkexChange}
            handleDelExp={handleDelExp}
            isNotFirst={index !== 0}
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
          {eduDetails.map((education, index) => (
            <EducationEditItem
            key={education.id}
            education={education}
            handleEduChange={handleEduChange}
            handleDelEdu={handleDelEdu}
            isNotFirst={index !== 0}
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