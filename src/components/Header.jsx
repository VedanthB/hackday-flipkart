import React from 'react'
import logo from '../assets/flipkart-plus_8d85f4.png'

const Header = () => {
    return (
        <div className="bg-[#2874f0] h-16 w-full">
            <div className="flex justify-between items-center max-w-4xl m-auto h-full">
                {/* logo */}
                <img src={logo} alt="logo" className="w-[75px] h-[20px]" />
                {/* search */}
                <form className="flex items-center">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-white border border-gray-300 text-gray-900 text-sm  block w-full pr-10 p-2.5 "
                            placeholder="Search for products, brands and more..."
                            required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </form>
                {/* button */}
                <button
                    type="button"
                    className="text-[#2874f0] font-bold bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 text-sm px-3 py-2 "
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header
