import { React, useState } from 'react'
import ReactPlayer from 'react-player'

function Home() {
  const [currentVideoUrl, setCurrentVideoUrl] = useState('https://www.youtube.com/watch?v=LXb3EKWsInQ');
  const [mediaUrl, setMediaUrl] = useState(null);
  const videoUrls = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=LXb3EKWsInQ'
    },
    {
      name: 'Vimeo',
      url: 'https://vimeo.com/76979871'
    },
    {
      name: 'Dailymotion',
      url: 'https://www.dailymotion.com/video/x7y9jgp'
    },

  ];
  const handleVideoChange = (url) => {
    setCurrentVideoUrl(url);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {

      const fileUrl = URL.createObjectURL(file);
      setMediaUrl(fileUrl);
    }
  };
  

  return (
    <>
      <div className='flex gap-2'>
        <div>
          <input className='mr-2 p-2 rounded-md bg-gray-100' type="text" placeholder='Project Name' />
          <input className='mr-2 p-2 rounded-md bg-gray-100' type="text" placeholder='Log in to save progress' />
        </div>
        <div className='flex filter grayscale ml-6 '>
          <button className='px-2 py-1 p-2'><img width={30} src="src\assets\undo.svg" alt="" /></button>
          <button className='px-2 py-1 p-2 '><img width={30} src="src\assets\undo.svg" alt="" className='scale-x-[-1]' /></button>

        </div>
        <div className='flex'>
          <p className='text-gray-600 pt-2'>Save your project for later - <a className='text-blue-300 mr-1' href="#">Signup</a>or<a className='text-blue-300 ml-1' href="#">Login</a> </p>
          <button className='px-2 py-1 bg-orange-500 ml-2 rounded-md text-white font-medium'>Upgrade</button>
          <button className='px-2 py-1 bg-zinc-500 ml-2 rounded-md text-white font-medium'>Upgrade</button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">

        <ReactPlayer controls={true} url={currentVideoUrl} />
      </div>

      <div className="flex justify-center items-center mt-4">

        {videoUrls.map((video, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(video.url)}
            className="mx-2 px-3 py-2 bg-gray-200 rounded-lg"
          >
            {video.name}
          </button>
        ))}
      </div>
      <div className="flex bg-gray-200 justify-center items-center mt-4">
        <input
          type="file"
          accept="video/*,audio/*,image/*"
          onChange={handleFileChange}
          className="px-3 py-2 border rounded-md"
          placeholder='+  Add media to this project'
        />
      </div>

    </>
  )
}

export default Home