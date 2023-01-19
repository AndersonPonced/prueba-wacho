import React from 'react'
import imagen1 from '../Imagenes/gato.jpg'
import imagen2 from '../Imagenes/varios-monos.jpg'




export const Imagenes = () => {
  return (
    <div>
      
  <img className='gato' src={imagen1}/>
  <img className='varios-monos' src={imagen2}/>


    </div>
  )
}

export default Imagenes
