import React, { use, useState } from 'react';
import Blog from '../Blog/Blog';
import { GoHeart } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blogs = ({ fetchPromise }) => {
    const data = use(fetchPromise)
    const [favorite, setFavorite] = useState([])
    const [count, setCount] = useState(0)
    const handleFavorite = (item, price) => {
        setFavorite([...favorite, item])
        toast.success('An item is added to favorites.')
        handleAmount(price)
    }
    const handleAmount = (price) => {
        setCount(count + price)
    }

    const handleRemoveFav = (id) => {
        const itemToRemove = favorite.find(fav => fav.id === id)
        if (itemToRemove) {
            const remainFavorite = favorite.filter(fav => fav.id !== id)
            const updateBidAmount = count - itemToRemove.currentBidPrice
            setCount(updateBidAmount)
            setFavorite(remainFavorite)
            toast.warning('removed')
        }

    }
    return (
        <div className='bg-[#ebf0f5] px-24 py-24 font-sora'>
            <div>
                <h1 className='text-3xl text-[#0E2954] font-semibold'>Active Auction</h1>
                <p className=''>
                    Discover and bid on extraordinary items
                </p>
            </div>
            <div className='flex justify-between mt-12 gap-8 '>
                <div className="py-3 overflow-x-auto rounded-3xl border border-base-content/5 bg-base-100 lg:w-[70%] shadow-xl">
                    <table className=" table rounded-2xl border border-hidden border-[#443C68] ">
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
                                data.map(item => <Blog favorite={favorite} item={item} key={item.id} handleFavorite={handleFavorite} />)
                            }
                        </tbody>
                    </table>
                    <ToastContainer />
                </div>
                <div className='w-[30%]  bg-white  rounded-3xl shadow-xl'>
                    <div className='flex items-center justify-center py-2 text-xl font-medium text-blue-400 gap-2 border-b-2 border-gray-500 '>
                        <GoHeart />
                        <h1 className='text-center '> Favorite Items</h1>
                    </div>
                    {favorite.length === 0 ? (
                        <div className='text-center  font-poppins py-14 '>
                            <h1 className='text-xl font-semibold '>No favorites yet</h1>
                            <p className='text-sm text-gray-400 font-light'>
                                Click the heart icon on any item <br /> to add it to your favorites
                            </p>
                        </div>
                    ) : (
                        favorite.map(item =>
                        (
                            <div className="overflow-x-auto " key={item.id}>
                                <table className=' table'>
                                    <tbody className=''>
                                        <tr className='rounded-box  border border-base-content/5 bg-base-100 my-2 shadow-xl'>
                                            <td>
                                                <img src={item.image} alt='' className='w-12 h-12' />
                                            </td>
                                            <td>
                                                <p>
                                                    {item.title}
                                                </p>
                                                <div className='flex justify-around mt-2'>
                                                    <p>
                                                        ${item.currentBidPrice}
                                                    </p>
                                                    <p>Bids: {item.bidsCount}</p>
                                                </div>
                                            </td>
                                            <td className=''>
                                                <button className=' cursor-pointer text-xl ' onClick={() => handleRemoveFav(item.id)}>
                                                    x
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                        )
                    )
                    }
                    <div className='border-t-2 border-gray-500 px-5 py-2 text-xl flex justify-between font-medium'>
                        <h1>Total Amount : </h1>
                        <h1>${count.toFixed(2)}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;