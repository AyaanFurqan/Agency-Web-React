import React, { useState } from 'react'

const Servicecard = ({ service, index }) => {

    return (
        <div className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200
         dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10' >

            <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500
             via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute -top-20 -left-20 z-0'></div>

            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white/80 dark:bg-gray-900/80 z-10 relative backdrop-blur-sm'>

                <div className='bg-gray-100 dark:bg-gray-700 rounded-full shrink-0'>
                    <img src={service.icon} alt="" className='w-16 h-16 bg-white dark:bg-gray-900 rounded-full m-2 object-contain' />
                </div>

                <div className='flex-1'>
                    <h3 className='font-bold text-lg'>{service.title}</h3>
                    <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>{service.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Servicecard
