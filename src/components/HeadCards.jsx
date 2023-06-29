import React from 'react'

const HeadCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/**card */}
        <div className='rounded-xl relative'>
            {/**overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 mt-2 absolute bottom-2 px-3'>Order Now</button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'></img>
        </div>
         {/**card */}
         <div className='rounded-xl relative'>
            {/**overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 mt-2 absolute bottom-2 px-3'>Order Now</button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'></img>
        </div>
         {/**card */}
         <div className='rounded-xl relative'>
            {/**overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-3'>We delivers to party's</p>
                <p className='px-2'>Weekend's only'</p>
                <button className='border-white bg-white text-black mx-2 mt-2 absolute bottom-2 px-3'>Order Now</button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/3753488/pexels-photo-3753488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'></img>
        </div>
    </div>
  )
}

export default HeadCards
