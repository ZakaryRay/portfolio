import React from "react";
import Hero_projet from "../components_projets/Hero_projet";
import ProjectFrame from "../components_projets/ProjectFrame";
import Footer_projet from "../components_projets/Footer_projet";

const Projets = () => {
    const projects = [
        {
            id: 1,
            name: "Synakode",
            year: "2025",
            type: "Full stack",
            description:
                "Site full stack avec un portail de gestion des clients, des documents et des devis. Côté client, un site vitrine affichant l'expertise de l'entreprise.  ",
            stacks: ["React", "Tailwind CSS", "JavaScript", "Laravel", "PHP", "PostgreSQL"],
            img_url: "../img/synakode_bg.png",
            url: "https://synakode.com",
        },
        {
            id: 2,
            name: "Fleuriste Cormier",
            year: "2026",
            type: "Site Vitrine",
            description:
                "Site vitrine pour un fleuriste de Trois-Rivières. Mise en valeur des services avec un accent sur la présentation visuelle.",
            stacks: ["React", "Tailwind CSS", "JavaScript"],
            img_url: "../img/fleuristeCormier_bg.png",
            url: "https://www.fleuristepepinierecormier.com",
        },
        {
            id: 3,
            name: "Projet final",
            year: "2026",
            type: "Web app",
            description:
                "Gestionnaire de budget personnel avec système de comptes utilisateurs. Permet de suivre ses dépenses et revenus au quotidien.",
            stacks: ["React", "Tailwind CSS", "JavaScript", "API"],
            img_url: "../img/projetfinal_bg.png",
        },
    ];

    return (
        <>
            <Hero_projet />
            <ProjectFrame projects={projects} />
            <Footer_projet />
        </>
    );
};

export default Projets;
