import React, { useState } from 'react'

const options = ['Youtube', 'Youtube Short', 'TikTok']
const Frames = [60, 50, 30, 24, 15, 10]

function Project() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [open, setOpen] = useState(false)
    const [selectedFrame, setSelectedFrame] = useState(30)

    const toggling = () => setIsOpen(!isOpen);
    const optionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    }
    const toggle = () => setOpen(!open);
    const frameClicked = (frame) => () => {
        setSelectedFrame(frame)
        setOpen(false);

    }
    return (
        <div>
            <div className='p-5 card border-l-2 border-r-2   h-15 z-10 w-460 text-lg font-semibold bg-white opacity-100 z-10 sticky top-0'>Project Setting</div>
            <div className='p-5 w-96 border-l-2 border-r-2  border-r-zinc-100 h-[70vh] overflow-y-auto scrollbar-hide'>

                <div className='mt-4 text-sm font-semibold text-gray-700'>Size</div>
                <div className='inline-flex border-2 w-80  border-r-zinc-100 mt-2'>
                    {/* <div className='mt-[-30px] mb-4 text-sm font-semibold text-gray-700'>Size</div> */}

                    <div className='main-w-[200px] relative inline-flex bg-white gap-28 '>
                        <div className='w-[100%] rounded-l-md px-4 py-2'> {selectedOption || 'Original 16:9'}</div>
                        <div className='relative'>
                            <button type='button' className='border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-lg px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700' onClick={toggling}>
                                <img width={38} src="src\assets\down-arrow.svg" alt="" />
                            </button>
                        </div>
                        {isOpen && (
                            <div className='main-w-[400px] absolute top-6 right-0-z-10 mt-4 min-w-[300px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'>
                                {options.map((Option) => (
                                    <div>
                                        <button type='button' onClick={optionClicked(Option)} key={Math.random()}>
                                            <div className='block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50'>
                                                {Option}
                                            </div>
                                        </button>
                                    </div>

                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-4 text-sm font-semibold text-gray-700'>Background</div>
                <div className=' mt-2 p-5 card border-2 rounded-lg border-r-zinc-100 '>

                    <div className='flex items-center mb-2 gap-44'>
                        <label for="color">
                            <input type="radio" id="color" name="option" value="color" /> Color
                        </label>
                        <span>#00000</span>
                    </div>
                    <hr />
                    <div className='flex items-center mb-2 gap-44 mt-2'>
                        <label for="image">
                            <input type="radio" id="color" name="option" value="Image" /> Image
                        </label>
                        <span>Upload</span>
                    </div>

                </div>
                <div className='mt-4 text-sm font-semibold text-gray-700'>Audio</div>
                <div className=' mt-2 p-2 card border-2 rounded-lg border-r-zinc-100 '>
                    <div className='flex items-center mb-2 gap-2'>
                        <img width={36} src="src\assets\th.jpg" alt="" />
                        <div className='flex flex-col ml-2 '>
                            <span className='font-semibold '>Translate Voice</span>
                            <span>Add Voice translations in multi-languages</span>
                        </div>
                        <img width={42} src="src\assets\th (1).jpg" alt="" />
                    </div>
                </div>

                <div className=' mt-2 p-2 card border-2 rounded-lg border-r-zinc-100 '>
                    <div className='flex items-center mb-2 gap-4'>
                        <img width={36} src="src\assets\th (2).jpg" alt="" />
                        <div className='flex flex-col ml-2 '>
                            <span className='font-semibold '>Clean Audio</span>
                            <span>Remove Background Noise</span>
                        </div>
                        <img width={42} src="src\assets\th (3).jpg" alt="" />
                    </div>
                </div>
                <div className='mt-4 text-sm font-semibold text-gray-700'>Duration</div>
                <div className=' mt-2 p-5 card border-2 rounded-lg border-r-zinc-100 '>

                    <div className='flex items-center mb-2 gap-44'>
                        <label for="color">
                            <input type="radio" id="color" name="option" value="Automatic" /> Automatic
                        </label>

                    </div>
                    <hr />
                    <div className='flex items-center mb-2 gap-44 mt-2'>
                        <label for="image">
                            <input type="radio" id="color" name="option" value="Fixed" /> Fixed
                        </label>
                        <span>01:00:0</span>
                    </div>

                </div>
                <div className='mt-4 text-sm font-semibold text-gray-700'>Frames Per Second</div>
                <div className='inline-flex border-2 w-80  border-r-zinc-100 mt-2'>
                    <div className='main-w-[200px] relative inline-flex bg-white gap-40 '>
                        <div className='w-[100%] rounded-l-md px-4 py-2'> {selectedFrame}</div>
                        <div className='relative'>
                            <button type='button' className='border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-lg px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700' onClick={toggle}>
                                <img width={80} src="src\assets\down-arrow.svg" alt="" />
                            </button>
                        </div>
                        {open && (
                            <div className='main-w-[400px] absolute top-6 right-0-z-10 mt-4 min-w-[300px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'>
                                {Frames.map((frame) => (
                                    <div key={frame}>
                                        <button type='button' onClick={frameClicked(frame)}>
                                            <div className='block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50'>
                                                {frame}
                                            </div>
                                        </button>
                                    </div>

                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-4 text-sm font-semibold text-gray-700'>Version History</div>
                <div className=' mt-2 p-2 card border-2 rounded-lg border-r-zinc-100 '>
                    <div className='flex items-center mb-2 gap-2'>
                        <img width={36} src="src\assets\th.jpg" alt="" />
                        <div className='flex flex-col ml-2 '>
                            <span className='font-semibold '>Restore To Previous Version</span>
                            <span>Creates a New Project</span>
                        </div>

                    </div>
                </div>


            </div>
        </div>


    )
}

export default Project