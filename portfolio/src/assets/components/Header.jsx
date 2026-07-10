import React, { useState } from "react";

const Header = () => {
    return (
        <header className="justify-between  border-b border-gray-900 p-8 font-family-unbounded space-y-5 md:flex md:space-y-0 md:text-lg text-xl">
            <h1 className="hover:text-electric-green font-semibold tracking-wider hover:cursor-pointer transition-all  duration-250 ">
                ZAKARY RAYMOND
            </h1>

            <nav>
                <ul className="w-full space-x-10 text-sm text-gray-500/60 space-y-5 md:flex md:space-y-0 ">
                    <li className="hover:cursor-pointer text-electric-green transition-all  duration-250 underline underline-offset-10 decoration-2 pb-2">
                        À PROPOS
                    </li>
                    <li className="hover:cursor-pointer hover:text-white transition-all  duration-250">
                        PROJETS
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
