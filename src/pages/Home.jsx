import NavigationBar from "../component/NavigatonBar/NavigationBar"
import { Container } from "reactstrap"
import Welcome from "../component/Welcome/Welcome"
import AboutMe from "../component/AboutMe/AboutMe"
import "../assets/css/general.scss"
import Card from "../component/TechStack/Card"
import Project from "../component/Project/Project"
const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Welcome />
            </Container>
            <AboutMe />
            <Card />
            <Project />
        </div>
    )
}

export default Home