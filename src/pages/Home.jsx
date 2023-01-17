import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import request from '../Request'
function Home() {
  return (
    <div>
      <Main/>
      <Rows rowId='1' title='Up Coming' fetchURL={request.requestUpcoming}/>
      <Rows rowId='2' title='Popular' fetchURL={request.requestPopular}/>
      <Rows rowId='3' title='Trending' fetchURL={request.requestTrending}/>
      <Rows rowId='4' title='Top Rated' fetchURL={request.requestTopRated}/>
      <Rows rowId='5' title='Horror' fetchURL={request.requestHorror}/>
    </div>
  )
}

export default Home