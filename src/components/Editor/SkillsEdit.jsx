import { useState } from "react"
import { SkillsSvg, DelButton } from "../svg"

export default function SkillsEdit({skills, handleSkillChange, handleAddSkill, handleDelSkill}) {
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
            <button className="del-btn" onClick={() => handleDelSkill(skill.id)}><DelButton/></button>
          </div>)
        })}
        <button className="add-edu" onClick={handleAddSkill}>
          + Add Skills
        </button>
      </>}
    </div>
  )
}