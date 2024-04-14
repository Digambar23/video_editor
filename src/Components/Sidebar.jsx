import React from 'react'
import { BsBorderWidth, BsCameraVideoFill, BsCaretDownSquareFill, BsFileEarmarkMinusFill, BsFileEarmarkMusicFill, BsFileFontFill, BsFillFilePlusFill, BsFillGearFill, BsPatchQuestion, BsSearch } from "react-icons/bs";



function Sidebar() {
    const menuItems = [
        { icon: <BsBorderWidth size={24} />, name: '' },
        { icon: <BsSearch size={24} />, name: 'Search' },
        { icon: <BsFillGearFill size={24} />, name: 'Settings' },
      { icon: <BsFillFilePlusFill size={24} />, name: 'Media' },
      { icon: <BsFileEarmarkMusicFill size={24} />, name: 'Audio' },
      { icon: <BsCaretDownSquareFill size={24} />, name: 'SubTitles' },
     { icon: <BsFileFontFill size={24} />, name: 'Text' },
    { icon: <BsFileEarmarkMinusFill size={24} />, name: 'Elements' },
      { icon: <BsCameraVideoFill size={24} />, name: 'Record' },
       { icon: <BsPatchQuestion size={24} />, name: '' }

    ]
    return (
        <div className=' w-20 h-screen p-5 flex flex-col items-center '>
            <div className='space-y-6 ' >
            { menuItems.map((item,index)=>(
                <div key={index} className='flex flex-col items-center'>
                    {item.icon}
                    <span className='text-sm mt-2 text-grey-700'>{item.name}</span>
                </div>
            ))}

            </div>
        </div>

    )
}

export default Sidebar