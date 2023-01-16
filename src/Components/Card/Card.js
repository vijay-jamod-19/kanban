import React, { useState } from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import moment from 'moment'
import './Card.css'
import Dropdown from '../Dropdown/Dropdown'
import { useDispatch } from 'react-redux'
import { CardDeleteAction } from '../../Redux/Action/cardAction'
import CardInfo from './CardInfo/CardInfo'

const Card = ({card,boardId}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(CardDeleteAction(id));
    }
  return (
    <>
        {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
        />
      )}
    
    <div className='card' onClick={() => setShowModal(true)}>
        <div className='card-top' style={{display:'flex'}}>
            <div className='card_top_labels'>
                <label style={{ backgroundColor: 'green' }}>
                    Fronted
                </label>
            </div>
            <div className='card_top_more' onClick={()=>setShowDropdown(!showDropdown)}>
                <MoreHorizontal />
                {showDropdown && (
                <Dropdown class="board_dropdown" onClose={() => setShowDropdown(false)}>
                    <p onClick={()=>handleDelete(card._id)}>
                    Delete Card
                    </p>
                </Dropdown>
                )}    
            </div>
        </div>
        <div className="card_title">{card.title}</div>
        <div className="card_footer">          
            <p className="card_footer_item">
              <Clock className="card_footer_icon" /> 
              {moment(card.createdAt).format("D MMM")}           
            </p>          
          
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              1/5
            </p>
          
        </div>
    </div>
    </>
  )
}

export default Card