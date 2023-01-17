import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/3689d1b9-def2-446b-bc6c-ba159a4469f8/IN-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netfliximg' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
      </div>
      </div>
      <SavedShows/>

    </>
    // <>
    //   <div className='w-full text-white'>
    //   <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/3689d1b9-def2-446b-bc6c-ba159a4469f8/IN-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netfliximg' />
    //   <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    //   <div className='absolute top-[20%] p-4 md:p-8'>
    //   <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
    //   </div>
    //   </div>
    //   <SavedShows/>
    // </>
  )
}

export default Account