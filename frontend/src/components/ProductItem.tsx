import Image from 'next/image'
import React from 'react'
import demo from "../assets/demo.jpg"

export default function ProductItem() {
  return (
    <div className='col-3 mb-4 '>

<div className="card " >
 <Image src={demo} width={300} height={200} objectFit="cover" alt='img'/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  )
}
