import React, { use } from 'react';
import Blog from './Blog';

const Blogs = ({ fetchPromise, handleFavorite, favorite }) => {
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
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 lg:w-[70%]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <Blog favorite={favorite} item={item} key={item.id} handleFavorite={handleFavorite}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blogs;