import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640PX] mx-auto p-4'>
        <div className='max-h-[500px] relative'>

            {/* Overlay */}
            <div className='absolute flex flex-col items-center w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex-flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '> The <span className='text-amber-500'>Best</span></h1>
                <h1 className='px-4 text-4xl text-amber-500 sm:text-5xl md:text-6xl lg:text-7xl font-bold '> Foods <span className='text-white	'>Delivered</span></h1>
            </div>
            <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=' w-[100%] max-h-[500px] object-cover'></img>
        </div>
    </div>
  )
}

export default Hero