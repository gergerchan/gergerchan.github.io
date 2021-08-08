import {  Modal, ModalHeader, ModalBody} from 'reactstrap';
import { useEffect, useState } from 'react';

const ModalExample = (props) => {
    const {
        className,
        modal,
        toggle,
        data
    } = props;

    const { title, access,access2,description,features,image,link,stack,image1,projectName } = data;

    const [mainimg, setMainimg] = useState(image1);
    useEffect(() => {
        setMainimg(image1)
    }, [image1])
    const setmainimage  = (data) => {
        setMainimg(data.item)
    }
  return (
    <div>
    {data && 
      <Modal size="xl" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
            <div className="row">
                <div className="col-12 text-center">
                    <img src={mainimg} alt="" className="main-image"/>
                </div>
                <div className="container">
                    <div className="row my-3 justify-content-center">
                    {image &&
                        image.map((item,i) => (
                            <div className="col-lg-2 col-4 mb-2" key={i}>
                                <img src={item} alt="" onClick={ () => setmainimage({item})} className="modal-image img-fluid"/>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Project Description</h3>
                    <p>
                        {description}
                    </p>
                    <h3>Main Features</h3>
                    <p className="features">{features}</p>
                    <h3>Build with</h3>
                    <p className="features">
                        {stack}
                    </p>
                    <h3>Access this project</h3>
                    <p className="features">
                        {access} <a href={link}>{projectName}</a> {access2}
                    </p>
                </div>
            </div>
        </ModalBody>
      </Modal>
      }
    </div>
  );
}

export default ModalExample;