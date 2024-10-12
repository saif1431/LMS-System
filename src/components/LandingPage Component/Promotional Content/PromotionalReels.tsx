import React from 'react'
import video from '../../../assets/dumyVideo.mp4'
function PromotionalReels() {
  return (
      <div className='mt-8 '>
      <div className='bg-[#F7F7F7] p-4 rounded-lg w-52 h-72'>
        <video controls loop autoFocus className='w-64 rounded-md h-60'>
        {/* <source src={video} type='video/mp4' /> */}
        </video>
        <p className='py-2 font-semibold'>Title</p>
      </div>
      </div>
  )
}

export default PromotionalReels
