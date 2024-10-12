import React from 'react'
import PromotionalVideo from '../../components/LandingPage Component/Promotional Content/PromotionalVideo'
import PromotionalReels from '../../components/LandingPage Component/Promotional Content/PromotionalReels'

function PromotionContent() {
  return (
    <div className='px-10 py-10'>
      <h1 className='text-3xl font-bold text-center'>Promotional Content</h1>

      <div className='flex flex-wrap items-center w-full gap-6 mx-auto'>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      </div>
      <div className='flex flex-wrap gap-8 item-center'>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
      </div>
      <div className='flex flex-wrap items-center w-full gap-6 mx-auto'>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      </div>
    </div>
  )
}

export default PromotionContent
