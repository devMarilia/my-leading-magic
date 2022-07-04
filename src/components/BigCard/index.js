import React from 'react'
import { ContainerBigCard } from './styled'

function BigCard() {
  return (
    <ContainerBigCard>
       <div className='content-big-card'>
           <div className='big-card'>
                <div className='big-card-content'>
                   <img src='https://ae01.alicdn.com/kf/H4f0bf3a70aed4e9695b9a8e6ee1141453/Conjunto-de-lingerie-transparente-de-cintura-alta-grande-conjuntos-breve-sexy-renda-conjunto-feminino-roupas-ntimas.jpg' alt='Mulher negra de lingerie'/>
                </div>
           </div>
           <div className='big-card'>
                <div className='big-card-content big-card-info'>
                     <h1>Veja mais</h1>
                        <p>
                         LINGERIE
                        </p>
                        <button className='big-card-button'>SHOP NOW</button>
                </div>
                {/* <button className='big-card-button'>SHOP NOW</button> */}
           </div>
       </div>
       <div className='content-big-card'>
           <div className='big-card'>
           <div className='big-card-content big-card-info'>
           <h1>Veja mais</h1>
                        <p>
                         LINGERIE
                        </p>
                        <button className='big-card-button'>SHOP NOW</button>
                </div>             
           </div>
           <div className='big-card'>
                 <div className='big-card-content'>
                   <img src='https://ae01.alicdn.com/kf/H4f0bf3a70aed4e9695b9a8e6ee1141453/Conjunto-de-lingerie-transparente-de-cintura-alta-grande-conjuntos-breve-sexy-renda-conjunto-feminino-roupas-ntimas.jpg' alt='Mulher negra de lingerie'/>
                </div>
           </div>
       </div>
    </ContainerBigCard>
  )
}

export default BigCard