import React from 'react'
import Image from 'next/image'
const images = [
    {
        'id': 1,
        'name': 'medium',
        'src': '/facebook.png'
    },
    {
        'id': 2,
        'name': 'twitter',
        'src': '/twitter.png'
    },
    {
        'id': 3,
        'name': 'instagram',
        'src': '/instagram.png'
    },
    {
        'id': 4,
        'name': 'youtube',
        'src': '/youtubev.png'
    }
]
const Footer = () => {
  return( 
    
    <div className="mx-auto p-4 min-w-screen text-center">
        <div className="flex justify-around">
            {
                images.map((image => {
                    return (
                        <div key={image.id} className="">
                            <Image className="" src={image.src} alt={image.name} width="32" height="32"/>
                        </div>
                    )
                }))
            }
        </div>
        <div className="mt-2">
            <div className="text-center">
                <h1 className="text-md">Designed by:</h1>
                <span className="items-start">
                    <h1 className="text-xl">Farid Akanda</h1>
                    <p className="text-xs">Computer Programmer</p>
                </span>
                
            </div>
        </div>
        <h1>&copy; All rights reserved 2023.</h1>
    </div>
  )
}

export default Footer
