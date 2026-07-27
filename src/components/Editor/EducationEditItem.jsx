import { useState } from "react"
import { DelButton } from "../svg"

export default function EducationEditItem ({education, handleEduChange, handleDelEdu, isNotFirst}) {
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
        {isNotFirst && <div>
          {<button className="del-btn" onClick={() => handleDelEdu(education.id)}>
            <DelButton/>
          </button>}
        </div>}
      </div>}
    
    </div>
  )
}