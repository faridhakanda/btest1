import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex justify-around text-violet-500">
      <div className="flex flex-row">
        <Image className="py-1" src="/brain.png" alt="brain" width="36" height="36"/>
        <h1 className="py-3">Brain</h1>
      </div>
      <h1 className="py-3">Score: 0</h1>
    </div>
  )
}

export default Navbar