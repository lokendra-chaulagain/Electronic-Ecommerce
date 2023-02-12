import Image from 'next/image'
import React from 'react'
import demo from "../assets/demo.jpg"
import { useGetBannersQuery } from '../features/api/apiSlice'
import { Banner } from '../interfaces/global'

export default function HeroCarousel() {
  const {data:banners}=useGetBannersQuery()
  return (
    <div>


<div id="carouselExampleCaptions" className="carousel slide">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}

  <div className="carousel-inner">

    {banners&&banners.map((banner:Banner,id:number)=>(

   <div key={id} className="carousel-item active">
     <Image src={demo} height={1000} width={2000} alt="img"   objectFit='cover'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{banner.title}</h5>
        <p>{banner.description}</p>
      </div>
    </div>   ))}

    
    

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
