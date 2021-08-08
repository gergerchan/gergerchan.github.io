import NavigationBar from "../component/NavigatonBar/NavigationBar"
import { Container } from "reactstrap"
import Welcome from "../component/Welcome/Welcome"
import AboutMe from "../component/AboutMe/AboutMe"
import "../assets/css/general.scss"
import Card from "../component/TechStack/Card"
import Project from "../component/Project/Project"
import Connect from "../component/Connect/Connect"
const Home = () => {
    return (
        <div id="hello">
            <NavigationBar />
            <Container>
                <Welcome />
            </Container>
            <AboutMe />
            <Card />
            <Project />
            <Connect />
        </div>
    )
}

export default Home