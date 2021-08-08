import Hello from "../../assets/img/hello.svg"
const Welcome = () => {
    return (
        <>
        <div className="row mt-lg-5 mt-3 align-items-center welcome-bg">
            <div className="col-lg-6 col-12 ">
                    <h1 className="b-700">Hello,</h1>
                    <h1 className="b-700">I am Gerry</h1>
                    <h1 className="b-700">Front End Developer</h1>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <img src={Hello} alt="Hello" className="img-fluid"/>
            </div>
        </div>
        </>
    )
}

export default Welcome
