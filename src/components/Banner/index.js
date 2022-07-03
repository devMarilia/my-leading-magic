import React from 'react'
import { ContainerBanner } from './styled'

function Banner() {
  return (
    <ContainerBanner>
   
      <div className='content-info-banner'>
        <div className='info-banner'>
        <h1>Agora somos mais <span>intimas</span></h1>
        <hr></hr>
        </div>
        
      </div>
      <div className='content-image-banner'>
      </div>

    </ContainerBanner>
  )
}

export default Banner