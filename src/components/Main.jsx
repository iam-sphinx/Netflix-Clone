import React from 'react'
import axios from 'axios';
import request from '../Request'
const Main = () => {
    const [movie, setMovie] = React.useState([]);
    const movies = movie[Math.floor(Math.random() * movie.length)]
    React.useEffect(()=>{
      axios.get(request.requestPopular).then((response)=>{
        setMovie(response.data.results)
      })
    }, [])

    const truncateString = (str, num) => {
      if(str?.length>num)
      return str.slice(0,num) + '...';
      else
      return str;
  }
  return (
    <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title}/>
    <div className='absolute w-full top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>{movies?.title}</h1>

    <div className='my-4'>
      <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
      <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
    </div>
    <p className='text-gray-400 text-sm'>Released: {movies?.release_date}</p>
    <p className='w-full md:max-w-[70%]'>{truncateString(movies?.overview, 150)}</p>
    </div>
    </div>

    </div>
  )
}

export default Main