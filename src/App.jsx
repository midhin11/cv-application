import { useState } from 'react'
import './App.css'

function Editor({details, handleChange}) {
  return (
    <div className='editor'>
      <div className="generalInfo">
        <h3>General Information</h3>
        <div>
          <label htmlFor='name'>Name: </label>
          <input type="text" name="name" id="name" placeholder='John Doe' value={details.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='position'>Position: </label>
          <input type="text" name="position" id="position" value={details.position} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor=''>Location: </label>
          <input type="text" name="location" id="location" value={details.location} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input type="text" name="email" id="email" value={details.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input type="text" name="phone" id="phone" value={details.phone} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='linkedIn'>LinkedIn: </label>
          <input type="text" name="linkedIn" id="linkedIn" value={details.linkedIn} onChange={handleChange}/>
        </div>
      </div>

      <div className='profSum'>
        <label htmlFor='about'>About </label>
        <textarea type="text" name="about" id="about" value={details.about} onChange={handleChange}></textarea>
      </div>
    </div>
  )
}

function Summary() {
  return(
    <div className='summary'>
      <h2>Professional Summary</h2>
    </div>

  )
}

function Preview({ details }) {
  const contactInfo = [
    details.location,
    details.email,
    details.phone,
    details.linkedIn,
  ];

  return (
    <div className="preview">
      <h1>{details.name}</h1>
      <h3>{details.position}</h3>
      <h4>{contactInfo.filter(info => info).join(" | ")}</h4>
      <Summary />
    </div>
  );
}

function App() {
  let initiallDetails = {
    name: "",
    position: "",
    location: "",
    email: "",
    phone: "",
    linkedIn: "",
    about: ""
  }
  const [details, setDetails] = useState(initiallDetails)
  function handleChange(e) {
    setDetails({...details, [e.target.name]: e.target.value,});
  }

  return (
    <div className='app'>
      <Editor details={details} handleChange={handleChange}/>
      <Preview details={details}/>
    </div>
  )
}

export default App
