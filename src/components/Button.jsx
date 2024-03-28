import React from 'react'

function Button({onClick, style, className, colorName}) {  
  return (
    <div>
      <button 
            onClick={onClick}
            style={style}
            className={`${className} outline-none px-4 py-1 rounded-full shadow-lg hover:scale-x-125 hover:scale-y-125 duration-75`}>
            {colorName}
      </button>
    </div>
  )
}

export default Button