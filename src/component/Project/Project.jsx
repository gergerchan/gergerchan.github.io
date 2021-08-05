import ProjectCard from "./ProjectCard"
import { Container } from "reactstrap"
import Home from "../../assets/img/fokusin/home.png"
import AdminHome from "../../assets/img/Admin/ThumbnailAdmin.png"
import LandingHome from "../../assets/img/LandingPage/LPThumbnail.png"
import ProjectModal from "./ProjectModal"
import { useState } from "react"

const Project = () => {
    const [modal, setModal] = useState(false);
    const fokusin = {
        title: "Fokusin Website",
        
    }
    const toggle = () => setModal(!modal);
    return (
        <div className="project bg-blue mt-5 py-5">
            <h1 className="b-700 text-center">My Project</h1>
            <Container>
                <div className="row mt-5">
                    <div className="col-lg-4 col-12 project-base-card" onClick={toggle}><ProjectCard title="Fokusin" img={Home}  /></div>
                    <div className="col-lg-4 col-12 mt-5 mt-lg-0 project-base-card" onClick={toggle}><ProjectCard title="Jalin Bank - Landing Page" img={LandingHome}/></div>
                    <div className="col-lg-4 col-12 mt-5 mt-lg-0 project-base-card" onClick={toggle}><ProjectCard title="Jalin Bank - Admin Dashboard" img={AdminHome}/></div>
                    <ProjectModal toggle={toggle} modal={modal} />
                </div>
            </Container>
        </div>
    )
}

export default Project
