import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/email.svg'
import location from '../img/location.svg'
import Title from '../Components/Title'


function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={'Contact Me'} span={'Contact Me'} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443087.5486247126!2d-95.6814737493492!3d29.817478217213342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1650912646915!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={'(719) 339-5617'} title={'Phone'} />
          <ContactItem icon={email} text1={'ethanfree23@gmail.com'} title={'Email'} />
          <ContactItem icon={location} text1={'Houston, Texas'} title={'Location'} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage