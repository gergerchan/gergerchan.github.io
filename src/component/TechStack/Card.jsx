import { FiSettings } from "react-icons/fi";
import { BsFillDisplayFill } from "react-icons/bs";
import { Container } from "reactstrap";
import BackendStack from "./BackendStack";
import FrontendStack from "./FrontendStack";
const Card = () => {
    return (
        <>
            <div className="text-center my-5">
                <Container>
                    <h1 className="b-700">Tech Stack</h1>
                    <div className="row justify-content-between mt-5">
                        <div className="col-lg-6 col-12 px-5">
                            <BackendStack img={FiSettings} />
                        </div>
                        <div className="col-lg-6 col-12 mt-5 mt-lg-0 px-5">
                            <FrontendStack img={BsFillDisplayFill} />
                        </div>
                    </div>
                </Container>
            </div>   
        </>
    )
}

export default Card
