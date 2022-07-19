import React from 'react'

export default function Layout(props) {
  return (

    // Layout parent component
    <div classname={props.class}>

<p classname='text-center'>Esto es de Layout - Area Top / Header </p>
<hr />
        {props.children}
        <hr />
<p classname='text-center'>Esto es de layout - Area del fondo / Footer </p>
    </div>
  )
}
