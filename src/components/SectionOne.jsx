import React from 'react'
import image from '../assets/Ash.png'
export const SectionOne = () => {
  return (
     <section className=''>

        <div className='w-[275px] h-[543px] absolute right-0 top-[6px]'>
            <img src={image} alt="Person holding 500 rupee note" className='w-full h-full object-cover lg:w-[350px] lg:h-[700px]' />
            </div>
            {/* Typo section */}
         
         
<div class="  top-[112px] absolute left-[24px] gap-[16px] h-[377px] w-[193px] text-white text-[17px]">

            <h3>Hola,this is <span>Ashish</span> A fully jammed rookie</h3>

            <h2>No Stack to Full Stack </h2>
            <h2>Love to work with others</h2>
            <h2>Learning <span>&</span> Implementing</h2>
          </div>
        
     </section>
  )
}
