import React from 'react'

function SkillsSection({ skill, progress }) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection