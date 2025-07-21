import React from 'react'
import {data} from "../assets/data"

const Navbar:React.FC = () => {
  return (
    <div className="w-full h-[80px] bg-darkBlue flex items-center pl-[57px] sticky top-0">
        <img className='w-28 h-14' src={data.logo} alt="" />
    </div>
  )
}

export default Navbar;