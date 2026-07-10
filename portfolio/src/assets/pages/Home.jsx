import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <>
            <Hero />
            <main className="text-light-gray p-10">
                <div className="space-y-3 text-base/7">
                    <p className="">
                        Je suis fraichement diplomé, mais completement fou crazy Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Autem quod facere voluptatibus ipsum
                        ipsa quas labore esse sunt odio asperiores, mollitia fugit. Illo asperiores
                        alias deserunt fugit quos quaerat neque?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in est
                        placeat error ab, ullam voluptatem nihil repudiandae ipsam nesciunt dolor
                        deleniti, quae ut dolores facilis asperiores voluptatibus, amet fugiat.
                    </p>
                </div>
            </main>
        </>
    );
};

export default Home;
