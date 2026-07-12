import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stacks from "../components/Stacks";

const Home = () => {
    return (
        <>
            <Hero />
            <main className="text-light-gray p-10 custom:flex custom:space-x-20 ">
                <div className="custom:w-1/2 ">
                    <div className="space-y-3 text-base/7  ">
                        <p className="">
                            Je suis fraichement diplomé, mais completement fou crazy Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit. Autem quod facere
                            voluptatibus ipsum ipsa quas labore esse sunt odio asperiores, mollitia
                            fugit. Illo asperiores alias deserunt fugit quos quaerat neque?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in est
                            placeat error ab, ullam voluptatem nihil repudiandae ipsam nesciunt
                            dolor deleniti, quae ut dolores facilis asperiores voluptatibus, amet
                            fugiat.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2 text-gray-purple font-mono custom:w-1/2 my-10">
                        <a
                            href="mailto:zkary-raymond@live.fr"
                            className="group flex items-center space-x-2 hover:text-white/80 custom:w-fit">
                            <i className="bx bxs-envelope"></i>
                            <span>zakary-raymond@live.fr</span>
                            <i className="bx bxs-chevron-up rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        </a>

                        <a
                            href="https://github.com/ZakaryRay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 hover:text-white/80 w-fit">
                            <i className="bx bxl-github"></i>
                            <span>github.com/ZakaryRay</span>
                            <i className="bx bxs-chevron-up rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/zakaryray/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 hover:text-white/80 w-fit">
                            <i className="bx bxl-linkedin"></i>
                            <span>linkedin.com/in/zakaryray</span>
                            <i className="bx bxs-chevron-up rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        </a>
                    </div>
                </div>
                <Stacks />
            </main>
        </>
    );
};

export default Home;
