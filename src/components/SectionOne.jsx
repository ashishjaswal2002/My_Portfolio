import React from 'react'
import image from '../assets/Ash.png'
export const SectionOne = () => {
  return (
     <section className=''>

        <div className='w-[215px] h-[543px] absolute right-0 top-[6px]'>
            <img src={image} alt="Person holding 500 rupee note" className='w-full h-full object-cover lg:w-[350px] lg:h-[700px]' />
            </div>
            {/* Typo section */}
         
         
<div class="  top-[112px] absolute left-[24px] gap-[16px] h-[377px] w-[193px] text-white  leading-[25.5px] p-0 flex flex-col ">

             <div className='w-[169px] h-[55px] leading-[26.21px] tracking-tighter'>
            <h3 className='text-[17px] font-Poppins font-normal '>Hola, this is <span className='font-SS font-bold'>&lt;/Ashish&gt;
           </span> A fully jammed rookie</h3>
         </div>
         <div>
            <h2>No Stack to Full Stack </h2>

         </div>
         <div>
            <h2>Love to work with others</h2>

         </div>
         <div>

            <h2>Learning <span>&</span> Implementing</h2>
         </div>
          </div>
        
     </section>
  )
}
