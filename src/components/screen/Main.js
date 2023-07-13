import React, { useState } from 'react'
import Room1 from './Room1'
import Room2 from './Room2'
import Room3 from '../Room3'

function Main() {

    const [user1, setUser1] = useState([])
    const [user2, setUser2] = useState([])
    const [user3, setUser3] = useState([])

    const User = () =>
    {
        return(
            <>
                <div className='p-5 m-5 border-black border-4 w-28'>
                    <p> user 1 </p>
                </div>

                <div className='p-5 m-5 border-black border-4 w-28'>
                    <p> user 2 </p>
                </div>

                <div className='p-5 m-5 border-black border-4 w-28'>
                    <p> user 2 </p>
                </div>
            </>
        )
    }

  return (
    <div className='mt-16'>

        {User()}

        <div className='flex flex-row justify-around'>
                 {/* rooms  */}
                <Room1/>
                <Room2/>
                <Room3/>
        </div>
       

    </div>
  )
}

export default Main