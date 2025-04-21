import React from 'react'

const SectionTitle = ({heading,subHeading,textColor}) => {
  return (
    <div className='text-center mx-auto  md:w-4/12 my-7' >
        <p className='text-[#D99904] pb-2 text-base italic font-normal'>{subHeading}</p>
        <h1 className={`${textColor === "white" ? "text-white" : "text-[#151515]"} py-3 border-[#E8E8E8] text-4xl border-y-2 font-normal`}>{heading}</h1>
    </div>
  )
}

export default SectionTitle