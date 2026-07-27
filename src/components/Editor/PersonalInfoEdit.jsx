import { useState } from "react"
import { PersonSvg } from "../svg"

export default function PersonalInfoEdit({details, handleDetailsChange}){
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