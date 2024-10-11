import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {
  return (
    <div className='w-full h-fit '>
     <center className='mt-12'>
     <h1 className='text-3xl font-bold'>Contact Us</h1>
     <p className='text-paraColor'>Any question or remarks? Just write us a message!</p>
     </center>
     <div className='bg-neutral-100 max-w-6xl mx-auto h-fit flex flex-col lg:flex-row mt-12 p-4' >
<div className='bg-primary w-full lg:w-[40%] text-white'>
  <div className='p-8 space-y-3'>
    <h3 className='text-txtColor text-2xl font-semibold'>Contact Information</h3>
    <p className=' text-[#C9C9C9]'>Say something to start a live chat!</p>
  </div>
  <div className='flex flex-col space-y-8  py-12 px-6'>
    <div className='flex items-center gap-4'>
    <PiPhoneCallFill className='font-bold text-xl' />
    <p>+1012 3456 789</p>
    </div>
    <div className='flex items-center gap-4'>
    <MdEmail className='font-bold text-xl'  />
    <p>abc@xyz.com</p>
    </div>
    <div className='flex items-center gap-4'>
    <FaLocationDot className='font-bold text-xl' />
    <p>ABC Street, XYZ City</p>
    </div>
  </div>
  <div>

  </div>
</div>
<div className='p-4 lg:p-8 w-full lg:w-[60%]'>
  <form action="" className='space-y-8 '>
  <div className='flex flex-col items-center justify-between w-full gap-6 lg:gap-4 lg:flex-row'>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='text-sm ' htmlFor="">First Name</label>
                        <input className='border-neutral-100 py-2 px-0  text-sm bg-neutral-100 outline-none border-b border-b-black w-[100%]' type="text" name="" id=""  placeholder='Enter your First Name' required/>
                  </div>
                  <div className='flex flex-col w-full gap-2 space-x-2'>
                        <label className='text-sm' htmlFor="">Last Name</label>
                        <input className='border-neutral-100 py-2 px-0   bg-neutral-100 text-sm outline-none border-b border-b-black w-[100%]' type="text" name="" id=""  placeholder='Enter your Last Name' required/>
                  </div>
            </div>
  <div className='flex flex-col items-center justify-between w-full gap-6 lg:gap-3 lg:flex-row'>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='text-sm ' htmlFor="">Email</label>
                        <input className='border-neutral-100 py-2 px-0 bg-neutral-100 text-sm outline-none border-b border-b-black w-[100%]' type="email" name="" id=""  placeholder='Enter your Email' required/>
                  </div>
                  <div className='flex flex-col w-full gap-2 space-x-2'>
                        <label className='text-sm' htmlFor="">Phone Number</label>
                        <input className='border-neutral-100 py-2 px-0 bg-neutral-100 outline-none border-b border-b-black w-[100%] text-sm' type="text" name="" id=""  placeholder='+9278575687' required/>
                  </div>
            </div>
<div className='space-y-3'>
  <h5 className='font-semibold'>Select Subject?</h5>
  <div className='flex items-center flex-wrap p-1 gap-5'>
 
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='rounded-full w-3 h-3 text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='rounded-full w-3 h-3 text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='rounded-full w-3 h-3 text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='rounded-full w-3 h-3 text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  </div>
</div>

<div className='flex flex-col'>
  <label className='text-sm' htmlFor="">Message</label>
<textarea className='text-sm border-neutral-100 border-b border-b-black py-2 px-0 bg-neutral-100 outline-none' name="" id="" placeholder='Write your Message.....'></textarea>
</div>
<div className='flex item-center justify-end'>
<button className='bg-primary py-2 px-6 text-white font-semibold rounded-md'>Send Message</button>
</div>
  </form>
</div>
     </div>
    </div>
  )
}

export default Contact
