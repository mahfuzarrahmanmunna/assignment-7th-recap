import React, { use } from 'react';

const Blogs = ({ fetchPromise }) => {
    const data = use(fetchPromise)
    return (
        <div className='bg-[#ebf0f5] px-24 py-24 font-sora'>
            <div>
                <h1 className='text-3xl text-[#0E2954] font-semibold'>Active Auction</h1>
                <p className=''>
                    Discover and bid on extraordinary items
                </p>
            </div>
            <div className=''>
                {
                    data.map(item => console.log(item))
                }
            </div>
        </div>
    );
};

export default Blogs;