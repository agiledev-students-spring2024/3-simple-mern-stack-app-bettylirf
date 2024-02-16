import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({})
  /**
   * A nested function that fetches About us information from the back-end server.
   */
  useEffect(() => {
    const fetchAboutData = () => (
      axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
        .then(response => {
          setAboutData(response.data)
        })
        .catch(err => {
          console.error('Error fetching data:', err)
        })
        .finally(() => {
          console.log('Finished fetching about us data')
        })
    )
    // fetch about us data this once
    fetchAboutData()
  }, [])

  return (
    <div>
      <h2>About Us</h2>
      {aboutData && (
        <div>
          <p>{aboutData.bio}</p>
          <img 
            className="profile-image" 
            src={aboutData.photoURL}
            onLoad={() => console.log('Image loaded')}
            alt="Betty Li" 
          />   
        </div>
      )}
    </div>
  )
}

export default AboutUs