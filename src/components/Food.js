import React, { useState } from 'react'
import {data} from '../data/data.js'

function Food() {
    const [foods, setFoods] = useState(data);

    // FIlter Type
    const filterType = (category) => {
        setFoods(
          data.filter((item) => {
            return item.category === category;
          })
        );
      };

      const filterPrice = (price) => {
        setFoods(
          data.filter((item) => {
            return item.price === price;
          })
        );
      };


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-amber-500 font-medium text-4xl text-center'>Top Rated Menu Items</h1>
        <div>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div>   
                 <p className='font-bold text-gray-700 pb-3'>Filter Type</p>
                 <div className='flex flex-wrap justify-between gap-4'>
                    <button onClick={() => setFoods(data)} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('oats')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Oats</button>
                    <button onClick={() => filterType('fruits')}className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Fruits</button>
                    <button onClick={() => filterType('pancakes')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Pancakes</button>
                    <button onClick={() => filterType('cakes')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>Cakes</button>
                 </div>
            </div>

            {/* Filter Price */}
            <div>   
                 <p className='font-bold text-gray-70 pb-3'>Filter Price</p>
                 <div className='flex justify-between gap-4 max-w-[390px]'>
                    <button onClick={() => filterPrice('$')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='border-orange-600 border-2  text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
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