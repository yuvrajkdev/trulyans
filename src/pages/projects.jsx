import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/projects.css";  // Ensure correct path to CSS file

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="overlay">
                            <div className="title projects-title">
                                Our Innovative Architectural Creations
                            </div>
                            <div className="subtitle projects-subtitle">
                                At The ANS Studio, we've crafted numerous architectural projects that showcase our commitment to innovation and sustainability. Our portfolio includes a range of residential, commercial, and public space designs, all aimed at enhancing the built environment. We invite you to explore our projects, learn about our design process, and share your thoughts. Collaboration and feedback are key to our continuous growth and improvement.
                            </div>
                            <div className="projects-list">
                                <AllProjects />
                            </div>
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
