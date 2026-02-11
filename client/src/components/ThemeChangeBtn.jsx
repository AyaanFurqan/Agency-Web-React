import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeChangeBtn = ({ theme, settheme }) => {

    useEffect(() => {
        const deviceprefrencetheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(!theme){
            settheme(deviceprefrencetheme?'dark' : 'light')
        }
    }, [])

    useEffect(() => {

        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('theme', theme)

    }, [theme])

    return (
        <div>
            <button>
                {theme === 'dark' ? (
                    <img src={assets.sun_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={() => { settheme('light') }} alt="" />
                ) : (
                    <img src={assets.moon_icon}
                        className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={() => { settheme('dark') }} alt="" />
                )}
            </button>
        </div>
    )
}

export default ThemeChangeBtn
