import React, { useState } from 'react'
import {data} from '../data/data.js'

function Food() {
    const [foods, setFoods] = useState(data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-amber-500 font-medium text-4xl text-center'>Top Rated Menu Items</h1>
        <div>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div>   
                 <p className='font-bold text-gray-700'>Filter Type</p>
                 <div className='flex flex-wrap justify-between gap-4'>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Oats</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Fruits</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Pancakes</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Cakes</button>
                 </div>
            </div>

            {/* Filter Price */}
            <div>   
                 <p className='font-bold text-gray-70'>Filter Price</p>
                 <div className='flex justify-between gap-4 max-w-[390px]'>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                 </div>
            </div>
            </div>
        </div>

        {/* Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-2xl rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} className='w-full h-[200px] object-cover rounded-t-lg' />
                    <div className='flex justify-between p-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-whiute p-1 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Food