import "./ProjectCard.scss"

const ProjectCard = ({title, img}) => {
    return (
        <div className="project-card text-center">
            <div className="project-card__container">
                <img src={img} alt="" className="project-card__img"/>
                <div className="project-card__title">
                    <h2 className="project-card__title-position">{title}</h2>
                </div>
            </div>
            <p>Tap to See Details</p>
        </div>
    )
}

export default ProjectCard
