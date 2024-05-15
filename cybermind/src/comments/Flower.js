import React from "react";
import {Input,Label,Form,Button} from "reactstrap";
import Rectangle from "../Assets/Rectangle 911.png";
import Frame from "../Assets/Frame1.png";
import Note from "../Assets/note-sticky.png";
import Trash from "../Assets/trash-can.png";
import User from "../Assets/user.png";
import Vector from "../Assets/Vector.png";
import Send from "../Assets/send.png"
import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Circle from "../Assets/circle-check.png";
import Close from "../Assets/close.png";
import Delete from "../Assets/Frame 48096328.png";
import Comments  from "./Comments";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Flower = (args) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  
return(
    <React.Fragment>
 <div className="fullbg">
        <div className="boxbg">
            <div className="boxbor">
                <div className="d-flex justify-content-between ">
                  <div>
                  <Button className="butt" onClick={toggle}><img src = {Circle} alt = ""></img></Button>
          <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalBody>
            The status of an event has been completed!!!
          </ModalBody>
          <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>


                  </div>
                <div className=""><img className="mar" src={Delete}/>
                <img src={Close} /></div>
</div> 
    </div>
            <div className="flower">
                Flower Arrangement
            </div>
            <div className="date">
            <Label htmlFor="date"></Label>
            <Input type="datetime-local" id="date" name="date" className="datetime"/>
           </div>

<div className = "frthrow">
          <div><img src = {User} alt = ""/></div>
          <div className = "assign">Assign to:</div>
          <div className = "fright">
          <img src = {Rectangle} alt = "" className = "profile"/>
          <label className = "selectprofile">
          <select >
            <option className = "name">Jane Smith</option>
            <option className = "name">Jenny</option>
            <option className = "name">John</option>
          </select> 
          </label>
          </div>
        </div>

          <div className="note d-flex">
            <div className=""><img src={Note} alt="user"/></div>
           <div className="assigntxt">Note:</div>
           <div className="cont d-flex">
            <div className="contact">09382049832
                www.flowervendor.com</div>
           </div>
          </div>

          <div className="bord"></div>
          <div className="comment">Comments</div>
          <div className="comments d-flex">
            <div className=""><img src={Rectangle} alt="" /></div>
            <div className="comtxt">
            <div className="janenam">Jane Smith</div>
            <div className="txt">Thanks htmlFor assigning me on the task. We’ll get the details ironed out.</div>
        </div>
          </div>
        

          <div className="comments d-flex">
            <div className=""><img src={Rectangle} alt="" /></div>
            <div className="comtxt">
            <div className="janenam">Jane Smith</div>
            <div className="txt">Thanks htmlFor assigning me on the task. We’ll get the details ironed out.</div>
        </div>
        <div className=""><img className="trash" src={Trash} alt="trashcan"/></div>
          </div>

          <div className="comments mar d-flex">
            <div className=""><img className="girlimg" src={Rectangle} alt="" /></div>
            <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
    </div>
    </div>
    </React.Fragment>
)
};

export default Flower;
