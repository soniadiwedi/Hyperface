import React from 'react'
import GirlImage from '../components/GirlImage'
import Getstarted from '../components/Getstarted'
import InstantCard from '../components/InstantCard'

const Home = () => {
  return (
    <div className='container_home'>
        <div>
            <h1>ALL YOUR BUSINESS BANKING IN ONE PLATFORM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem soluta, tempore consequuntur ipsa, quidem dolorem perspiciatis incidunt velit repellat aperiam exercitationem necessitatibus eveniet cumque ab nostrum reiciendis recusandae quisquam?</p>
        <Getstarted/>
        <p>Already started ? <span>finish your application</span></p>
        </div>
        
          <GirlImage/>
        <InstantCard/>  
        
    </div>
  )
}

export default Home