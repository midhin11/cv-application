export default function Editor({details, workexDetails, handleDetailsChange, handleWorkexChange}) {
  return (
    <div className='editor'>
      <div className="generalInfo">
        <h3>General Information</h3>
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

        <div className="work-experience-edit">
            <h3>Work Experience</h3>
            <div>
                <label htmlFor="role">Role: </label>
                <input type="text" name="role" id="role" value={workexDetails.role} onChange={handleWorkexChange}/>
            </div>
            <div>
                <label htmlFor="company">Company: </label>
                <input type="text" name="company" id="company" value={workexDetails.company} onChange={handleWorkexChange}/>
            </div>
            <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" name="startDate" id="startDate" value={workexDetails.startDate} onChange={handleWorkexChange}/>
            </div>
            <div>
                <label htmlFor="endDate">End Date: </label>
                <input type="date" name="endDate" id="endDate" value={workexDetails.endDate} onChange={handleWorkexChange}/>
            </div>
            <div>
                <label htmlFor="jobDesc">Job Description: </label>
                <textarea type="text" name="jobDesc" id="jobDesc" value={workexDetails.jobDesc} onChange={handleWorkexChange}></textarea>
            </div>
        </div>
        
      
    </div>
  )
}