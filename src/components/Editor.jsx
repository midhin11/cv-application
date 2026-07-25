// Editor.jsx

import { PersonSvg, WorkSvg } from "../svg.jsx";

export default function Editor({details, workexDetails, handleDetailsChange, handleWorkexChange, handleAddExp}) {
  return (
    <div className='editor'>
      <div className="generalInfo">
        <div className="editor-header"><PersonSvg/><h3>General Information</h3></div>
        <div>
          <label htmlFor='name'>Name: </label>
          <input type="text" name="name" id="name" placeholder='John Doe' value={details.name} onChange={handleDetailsChange}/>
        </div>
        <div>
          <label htmlFor='curr-position'>Position: </label>
          <input type="text" name="curr-position" id="curr-position" value={details.position} onChange={handleDetailsChange}/>
        </div>
        <div>
          <label htmlFor=''>Location: </label>
          <input type="text" name="location" id="location" value={details.location} onChange={handleDetailsChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input type="text" name="email" id="email" value={details.email} onChange={handleDetailsChange}/>
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input type="text" name="phone" id="phone" value={details.phone} onChange={handleDetailsChange}/>
        </div>
        <div>
          <label htmlFor='linkedIn'>LinkedIn: </label>
          <input type="text" name="linkedIn" id="linkedIn" value={details.linkedIn} onChange={handleDetailsChange}/>
        </div>

        <div className='summary-edit'>
            <label htmlFor='about'>About you: </label>
            <textarea type="text" name="about" id="about" value={details.about} onChange={handleDetailsChange}></textarea>
        </div>  
      </div>

      <div className="editor-header"><WorkSvg/><h3>Work Experience</h3></div>
        {workexDetails.map((workexDetail, index) => (
          <WorkExperienceEditItem 
          key={workexDetail.id} 
          workexDetail={workexDetail} 
          handleWorkexChange={handleWorkexChange}
          handleAddExp={handleAddExp}
          isLast={index === workexDetails.length - 1}
          />
        ))}
      
    </div>
  )
}

function WorkExperienceEditItem({workexDetail, handleWorkexChange, handleAddExp, isLast}) {
    return (<div className="experience-edit" key={workexDetail.id}>
      <div>
          <label htmlFor="role">Role: </label>
          <input type="text" name="role" id="role" value={workexDetail.role} onChange={(e) => (handleWorkexChange(e, workexDetail.id))}/>
      </div>
      <div>
          <label htmlFor="company">Company: </label>
          <input type="text" name="company" id="company" value={workexDetail.company} onChange={(e) => (handleWorkexChange(e, workexDetail.id))}/>
      </div>
      <div>
          <label htmlFor="startDate">Start Date: </label>
          <input type="date" name="startDate" id="startDate" value={workexDetail.startDate} onChange={(e) => (handleWorkexChange(e, workexDetail.id))}/>
      </div>
      <div>
          <label htmlFor="endDate">End Date: </label>
          <input type="date" name="endDate" id="endDate" value={workexDetail.endDate} onChange={(e) => (handleWorkexChange(e, workexDetail.id))}/>
      </div>
      <div>
          <label htmlFor="jobDesc">Job Description: </label>
          <textarea type="text" name="jobDesc" id="jobDesc" value={workexDetail.jobDesc} onChange={(e) => (handleWorkexChange(e, workexDetail.id))}></textarea>
      </div>
      {isLast && <button className="add-ex" onClick={handleAddExp}>
        Add Experience
        </button>}
    </div>
  ) 
}