import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Contactus = () => {

    const [name,setname]=useState('')

    const [email,setemail]=useState('')

    const [message,setmessage]=useState('')

const submitform =async ()=>{

      const response = await fetch('http://localhost:3000/api/addform',{
        method:'POST',
        headers: {
                'Content-Type': 'application/json' 
            },
        body: JSON.stringify({
            name,
            email,
            message
        })
    })

    const data =await response.json()
}
  

    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
     text-gray-700 dark-text-white'>

            <Title title='Reach out to us' desc='from strategy to execution, we craft digital
       solutions that move your business forward.'/>

            <div className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div>
                        <img src={assets.person_icon} alt="" />
                        <input value={name} onChange={(e)=>setname(e.target.value)} className='w-full p-3 text-sm outline-none' type="text" placeholder='Enter your name' />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div>
                        <img src={assets.email_icon} alt="" />
                        <input value={email} onChange={(e)=>setemail(e.target.value)} className='w-full p-3 text-sm outline-none' type="text" placeholder='Enter your email' />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea value={message} onChange={(e)=>setmessage(e.target.value)} rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none
                     rounded-lg border border-gray-300 dark:border-gray-600'/>
                </div>

                <button onClick={submitform} type='button' className='w-max flex gap-2 bg-primary text-white text-sm
                 px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit <img className='w-4' src={assets.arrow_icon} alt="" />
                </button>

            </div>

        </div>
    )
}

export default Contactus
