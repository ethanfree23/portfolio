import '../styles/_aboutpage.scss'
import React from 'react';
import Title from '../Components/Title.js'
import ImageSection from './ImageSection.js'
import SkillsSection from '../Components/SkillsSection.js'


function AboutPage() {
  return (
    <div>
      <div className="AboutPage">
        <Title title={'About Me'} span={'About Me'} />
        <ImageSection />
        <Title title={'My Skills'} span={'My Skills'} />
        <SkillsSection skill={'Javascript'} progress={'70%'}/>
      </div>
    </div>
  )
}

export default AboutPage