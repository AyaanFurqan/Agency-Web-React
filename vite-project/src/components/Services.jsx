import React from 'react'
import assets from '../assets/assets'

const Services = () => {

    const servicesdata = [
        {
            title: 'Advertising',
            Description: 'We turn bold ideas into powerful digital solutions that connect,engage.',
            icon: assets.ads_icon
        },

        {
            title: 'Content marketing',
            Description: 'We help you execute your plans and deliver results.',
            icon: assets.marketing_icon
        },

        {
            title: 'Content writing',
            Description: 'We help you create a marketing strategy that drive results.',
            icon: assets.content_icon
        },

        {
            title: 'Social media',
            Description: 'We help you built a strong social media presence and engagewith your audience.',
            icon: assets.social_icon
        },
    ]

    return (
        <div className='flex items-center text-center'>
            <h2 className='font-semibold'>How can we help?</h2>
        </div>
    )
}

export default Services
