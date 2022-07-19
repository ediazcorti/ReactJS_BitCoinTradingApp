import React from 'react'

export default function Layout(props) {
  return (

    // Layout parent component
    <div className={props.class}>

      <h2 className='text-center'>Esto es de Layout - Area Top / Header
      </h2>
      <hr />
      {props.children}
      <hr />
      <h2 className='text-center'>Esto es de layout - Area del fondo / Footer </h2>
    </div>

  )
}

