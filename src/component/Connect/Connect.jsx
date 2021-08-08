import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Connect.scss"
const Connect = () => {
    return (
        <div className="social-media my-5" id="contact">
            <h1 className="text-center b-700">Let's get connected with me!</h1>
            <div className="social-media-icon mt-4 text-center">
                <a href="https://id.linkedin.com/in/gerry-andika-chandra-001427175" ><span className="social-media-icon__container" ><FaLinkedin className="social-media-icon__icon" /></span></a>
                <a href="https://github.com/gergerchan"><span className="social-media-icon__container"><FaGithub className="social-media-icon__icon"/></span></a>
                <a href="https://gitlab.com/gergerchan"><span className="social-media-icon__container"><FaGitlab className="social-media-icon__icon"/></span></a>
                <a href="https://www.instagram.com/gerger9/"><span className="social-media-icon__container"><FaInstagram className="social-media-icon__icon"/></span></a>
                <a href="https://www.facebook.com/gerryandikachandra/"><span className="social-media-icon__container"><FaFacebook className="social-media-icon__icon"/></span></a>
            </div>

            <div className="row mt-4" >
                <div className="col-12 p-0 d-flex justify-content-center">
                    <span className="social-media-icon__container"><MdEmail className="social-media-icon__icon"/></span>
                </div>
                <div className="col-12 p-0 mt-lg-2 text-center">
                    You can e-mail me at : gergerchandra@gmail.com
                </div>
            </div>
            

        </div>
    )
}

export default Connect
