import React from "react";
import { motion } from "framer-motion";
import Hero from "../components_home/Hero";
import Stacks from "../components_home/Stacks";
import Stats from "../components_home/Stats";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const Home = () => {
    return (
        <>
            <Hero />
            <main className="text-light-gray py-14 px-10 custom:py-30 custom:flex custom:space-x-20 custom-border ">
                <motion.div
                    className="custom:w-1/2 "
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}>
                    <motion.div variants={fadeInUp} className="space-y-3 text-base/7  ">
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
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col space-y-2 text-gray-purple font-mono custom:w-1/2 mt-10 max-custom:mb-10">
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
                    </motion.div>
                </motion.div>
                <Stacks />
            </main>
            <Stats />
        </>
    );
};

export default Home;
