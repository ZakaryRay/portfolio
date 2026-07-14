import React from "react";

const Hero_projet = () => {
    return (
        <div className="relative h-40 md:h-60 p-10 border-b border-gray-900 overflow-hidden flex flex-col items-start justify-center space-y-2 transition-all">
            <div className="font-mono text-sm text-electric-green flex space-x-2">
                <p>Travaux sélectionnés</p>
                <span className="w-1 h-1 bg-gray-purple/50 self-center rounded "></span>
                <p>2025-2026</p>
            </div>
            <h2 className="text-6xl custom:text-7xl font-family-unbounded font-black transition-all">
                Projets
            </h2>
        </div>
    );
};

export default Hero_projet;
