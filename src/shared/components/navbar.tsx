'use client';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full max-h-20 flex items-center justify-between px-4 sm:px-6 md:px-[70px] py-4 z-50 bg-surface  backdrop-blur-md shadow-lg text-text-primary">
                <div>
                    <img src="/assets/logo.png" alt="logo" width={100} />
                </div>

                <div className="hidden md:flex flex-row gap-28">
                    <div className="hover:scale-110 hover:text-button">
                        <button className="text-[17px] font-bold">Profile</button>
                    </div>
                    <div className="hover:scale-110 hover:text-button">
                        <button className="text-[17px] font-bold">Demo 1</button>
                    </div>
                    <div className="hover:scale-110 hover:text-button">
                        <button className="text-[17px] font-bold">Demo 2</button>
                    </div>
                </div>

                <div className="hidden md:block text-xl border-2 py-1 px-7  rounded-md transition duration-300 border-button text-button hover:scale-x-110 hover:bg-button hover:text-text-plain">
                    <a href="https://reqres.in/" className="text-xl hover:text-text-plain">
                        Reqres →
                    </a>
                </div>

                <div className="block md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FaBars size={30} />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed top-20 left-0 w-full bg-background-con bg-opacity-80 backdrop-blur-md shadow-lg z-10">
                    <ul className="flex flex-col items-start font-thin text-xl text-text-primary space-y-4 py-4 ml-5">
                        <li>
                            <button className="text-lg font-bold">Profile</button>
                        </li>
                        <li>
                            <button className="text-lg font-bold">Demo 1</button>
                        </li>
                        <li>
                            <button className="text-lg font-bold">Demo 2</button>
                        </li>
                    </ul>
                    <div className="flex items-center mx-3 mb-3">
                        <a href="/contact-us" className="w-full text-center text-button border-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300">
                            Book A Free Consultation →
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
