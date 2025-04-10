import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 flex py-4 bg-base-100 shadow-sm px-24 justify-between items-center font-poppins">
            <div className="">
                <h1 className='text-3xl'><span className='text-[#003EA4] font-medium'>Auction</span><span className='text-[#FFD337] font-bold'>Gallery</span></h1>
            </div>
            <div className='flex gap-8 text-xl'>
                <a className='hover:text-blue-500 active:text-red-500 cursor-pointer'>Home</a>
                <a className='hover:text-blue-500 active:text-red-500 cursor-pointer'>Auction</a>
                <a className='hover:text-blue-500 active:text-red-500 cursor-pointer'>Category</a>
                <a className='hover:text-blue-500 active:text-red-500 cursor-pointer'>How to works</a>
            </div>
            <div className="">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <IoNotificationsOutline size={26} />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end ms-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;