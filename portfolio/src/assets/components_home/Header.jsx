import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const linkClass = ({ isActive }) =>
        `relative hover:cursor-pointer transition-all duration-250 py-3 md:pb-2 group  ${
            isActive ? "text-electric-green" : "hover:text-white"
        }`;

    return (
        <header className="justify-between border-b border-gray-900 p-8 font-family-unbounded space-y-10 md:space-y-0 md:flex md:text-lg text-2xl">
            <Link className="hover:text-electric-green font-semibold tracking-wider hover:cursor-pointer transition-all duration-250 self-center text-xl md:text-2xl">
                ZAKARY RAYMOND
            </Link>

            <nav className="mt-4 md:my-0">
                <ul className="w-full space-x-10 text-sm text-gray-purple space-y-6 md:space-y-0 md:flex">
                    <NavLink to="/" end className={linkClass}>
                        {({ isActive }) => (
                            <>
                                À PROPOS
                                <span
                                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-electric-green transition-transform duration-300 origin-left w-full ${
                                        isActive ? "scale-x-100" : "scale-x-0"
                                    }`}
                                />
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/projets" className={linkClass}>
                        {({ isActive }) => (
                            <>
                                PROJETS
                                <span
                                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-electric-green transition-transform duration-300 origin-left w-full ${
                                        isActive ? "scale-x-100" : "scale-x-0"
                                    }`}
                                />
                            </>
                        )}
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
