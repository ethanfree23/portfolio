import '../styles/_aboutpage.scss'
import React from 'react';
import Title from '../Components/Title.js'
import ImageSection from './ImageSection.js'
import SkillsSection from '../Components/SkillsSection.js'
import ServicesSection from '../Components/ServicesSection.js'
import design from '../img/WebDesign.jpeg'


function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills'} />
      <div className="skills-container">
        <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'React'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Redux'} progress={'20%'} width={'20%'} />
        <SkillsSection skill={'Ruby'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Ruby on Rails'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'HTML'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'CSS'} progress={'65%'} width={'65%'} />
        <SkillsSection skill={'Postgres'} progress={'10%'} width={'10%'} />
        <SkillsSection skill={'Git'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Github'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'Heroku'} progress={'20%'} width={'20%'} />
        <SkillsSection skill={'Sinatra'} progress={'10%'} width={'10%'} />
      </div>
      <div className="services-container">
        <ServicesSection image={design}/>
        <ServicesSection image={design}/>
        <ServicesSection image={design}/>
      </div>
    </div>
  )
}

export default AboutPage