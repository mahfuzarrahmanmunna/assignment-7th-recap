import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



const Blog = ({ item, handleFavorite, favorite }) => {
    const { image, id, title, bidsCount, currentBidPrice, description, timeLeft } = item

    const isFavorite = favorite.find(fav => fav.id === id)
    // const handleFavorite = () => {
    //     if (isFavorite) {
    //         setIsFavorite(false)
    //     } else {
    //         setIsFavorite(true)
    //     }
    // }


    return (
        <tr>
            <td className='flex items-center gap-2 w-[300px]'>
                <img className='h-12 w-12' src={image} alt="" />
                <p>{title}</p>
            </td>
            <td>
                ${currentBidPrice}
            </td>
            <td>
                {timeLeft}
            </td>
            <td>
                <button onClick={() => handleFavorite(item)} disabled={isFavorite}>
                    {isFavorite ? (
                        <FaHeart size={26} className='text-red-500 cursor-not-allowed' />
                    ) : (
                        <FaRegHeart size={26} className='hover:text-red-500 cursor-pointer' />
                    )
                    }
                </button>
            </td>
        </tr>
    );
};

export default Blog;