import {  Modal, ModalHeader, ModalBody} from 'reactstrap';
import fokusin1 from "../../assets/img/fokusin/home.png"
import fokusin2 from "../../assets/img/fokusin/goals.png"
import fokusin3 from "../../assets/img/fokusin/Notes.png"
import fokusin4 from "../../assets/img/fokusin/todo.png"
import fokusin5 from "../../assets/img/fokusin/comment.png"
import fokusin6 from "../../assets/img/fokusin/Date.png"
import { useState } from 'react';

const ModalExample = (props) => {
    const dataimage = [fokusin1,fokusin2,fokusin3,fokusin4,fokusin5,fokusin6]
    const [image, setImage] = useState(dataimage)
    const [mainimg, setMainimg] = useState(image[0])
    const {
        className,
        modal,
        toggle
    } = props;

    const setmainimage  = (data) => {
        setMainimg(data.item)
    }

  return (
    <div>
      <Modal size="xl" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Fokusin Application</ModalHeader>
        <ModalBody>
            <div className="row">
                <div className="col-12">
                    <img src={mainimg} alt="" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row my-3">
                    {
                        image.map((item,i) => (
                            <div className="col-2" key={i}>
                                <img src={item} alt="" onClick={ () => setmainimage({item})} className="modal-image img-fluid"/>
                            </div>
                        ))
                    }
                    </div>
                    <h3>Project Description</h3>
                    <p>Fokus.in is a smart-goals planner based on website that help users in achieving their goals</p>
                    <h3>Main Features</h3>
                    <p className="main-features">1. Choose a Goal to learn\n2. Mark the steps you have done\n3. Discussion with other member about the Goal\n4. To Do list and integrate with calendar</p>
                </div>
            </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;