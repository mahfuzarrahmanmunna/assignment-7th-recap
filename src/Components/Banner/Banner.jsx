import React from 'react';

const Banner = () => {
    return (
        <div className='h-[570px] lg:px-24 px-3 bg-[url("https://i.ibb.co.com/tTW984BV/Banner-min.jpg")] bg-center bg-cover w-full'>
            <div className='text-white font-sora h-full flex justify-start items-center '>
                <div className=''>
                    <h1 className=' font-semibold text-4xl'>
                        Bid on Unique Items from <br /> Around the World
                    </h1>
                    <p className='mt-2'>
                        Discover rare collectibles, luxury goods, and vintage <br />
                        treasures in our curated auctions
                    </p>
                    <button className='btn text-gray-800 font-xl rounded-full mt-2'>
                        Explore Auctions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;