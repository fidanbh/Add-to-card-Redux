import React, {useContext} from 'react'
import { ThemeContext } from '../Products/Products'

const Button = ({text,btn_add, id,getId}) => {
  
  
  return (
    <div>
        <button className={btn_add} onClick={getId} id={id}>{text}</button>
        
    </div>
  )
}

export default Button