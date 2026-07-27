import { useState } from "react"
import { DelButton } from "../svg"

export default function WorkExperienceEditItem({work, handleWorkexChange,  handleDelExp, isNotFirst}) {
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
        {isNotFirst && <div>
          {<button className="del-btn" onClick={() => handleDelExp(work.id)}>
            <DelButton/>
          </button>}
        </div>}
      </div>}

    </div>
  ) 
}