import React, { useEffect, useState } from 'react'
import './Board.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Card/Card'
import Editabled from '../Editabled/Editabled'
import Dropdown from '../Dropdown/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { TitleDeleteAction } from '../../Redux/Action/titleAction'
import { Droppable,Draggable  } from 'react-beautiful-dnd'

const Board = ({board}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [boardTarget, setBoardTarget] = useState('');
    const {cards} = useSelector(state=>state.CardList);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
      dispatch(TitleDeleteAction(id));
    }
    
    
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {board.title}
          {/* <span>{cardTotal}</span> */}
        </p>
        <div
          className="board_header_title_more" onClick={() => setShowDropdown(!showDropdown)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown  class="board_dropdown" onClose={() => setShowDropdown(false)}>
              <p onClick={()=>handleDelete(board._id)}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">        
              {cards && cards.map((item,index)=>{
              if(board._id === item.Board){
                return (
                  <Draggable
                  key={item._id}
                  draggableId={item._id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card card={item} boardId={board._id}/>
                    </div>
                  )}
                </Draggable>
                )
              }
            })}            
          
        {/*  */}
        <Editabled displayClass="board_add-card" 
        text="+ Add Card" 
        placeholder="Enter Card Title" 
        addNew="card"
        boardId={board._id}
        />
      </div>
    </div>
  )
}

export default Board