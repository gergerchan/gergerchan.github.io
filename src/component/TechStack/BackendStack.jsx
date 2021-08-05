import "./CardItem.scss"
const BackendStack = (props) => {
    return (
        <>
            <div className="card">
                <props.img className="mx-auto mt-5 mb-3 image-size"/>
                <h2 className="b-700 pb-3 stack">
                    Back-end Stack
                </h2>
                <ul className="mb-5 mt-3">
                    <li>Express JS</li>
                    <li>PHP</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </>
    )
}

export default BackendStack
