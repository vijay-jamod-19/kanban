import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  X,
} from "react-feather";
import Editabled from "../../Editabled/Editabled";
import Modal from "../../Modal/Modal";
import "./CardInfo.css";

function CardInfo(props) {
  const {card} = props;
  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Title : </p>
            {card.title}
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Description : </p>
            {card.description ? card.description :
            <Editabled displayClass="board_add-card" 
              text="+ Add Description" 
              placeholder="Enter Card Description" 
              addNew="card"
              edit="edit"
              cardId={card._id}
              />
            }
          </div>
          
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            <p>Date : </p>
            {moment(card.createdAt).format("D MMM")}
          </div>
          
        </div>

      </div>
    </Modal>
  );
}

export default CardInfo;
