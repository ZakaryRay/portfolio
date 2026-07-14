import React from "react";
import Header from "../components_home/Header";
import Hero_projet from "../components_projets/Hero_projet";
import ProjectFrame from "../components_projets/ProjectFrame";

const Projets = () => {
    const projects = [
        {
            id: 1,
            name: "Synakode",
            year: "2026",
            type: "Full stack",
            description: "Une courte description",
            stacks: ["React", "Tailwind CSS", "JavaScript"],
            img_url: "../img/synakode_bg.png",
            url: "https://synakode.com",
        },
        {
            id: 2,
            name: "Fleuriste Cormier",
            year: "2026",
            type: "Site Vitrine",
            description: "Une courte description",
            stacks: ["React", "Tailwind CSS", "JavaScript"],
            img_url: "../img/fleuristeCormier_bg.png",
            url: "https://www.fleuristepepinierecormier.com",
        },
        {
            id: 3,
            name: "Projet final",
            year: "2026",
            type: "Web app",
            description: "Une courte description",
            stacks: ["React", "Tailwind CSS", "JavaScript"],
            img_url: "../img/projetfinal_bg.png",
        },
    ];

    return (
        <>
            <Hero_projet />
            <ProjectFrame projects={projects} />
        </>
    );
};

export default Projets;
