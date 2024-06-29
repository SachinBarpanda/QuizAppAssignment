import React from 'react'

function Button(props) {
    const {children , className , onClick} = props
  return (
    <div>
        <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button