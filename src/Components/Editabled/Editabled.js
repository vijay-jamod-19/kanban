import React, { useState } from 'react'
import { X } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux';
import { CardAddAction, CardUpdateAction } from '../../Redux/Action/cardAction';
import { BoardAddAction } from '../../Redux/Action/titleAction';
import './Editable.css'

const Editabled = (props) => {
    const [isEditable, setIsEditable] = useState(false);
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    
    const authData = JSON.parse(localStorage.getItem('authData'));
    // console.log(props.boardId)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.addNew == "card"){
          // console.log('card')
          if(props.edit=="edit"){
            const value = {
              id:props.cardId,
              description:inputText  
            }
            dispatch(CardUpdateAction(value));
          }else{
            const value={
              user:authData._id,
              board:props.boardId,
              title:inputText
            }
            dispatch(CardAddAction(value));
          }
        }else if(props.addNew == "board"){
          // console.log('board')
          const value ={
            user:authData._id,
            title:inputText
          }
          dispatch(BoardAddAction(value));
        }        
        setIsEditable(false);
        setInputText("");
    }
  return (
    <div className="editable">
        { isEditable ?
        <form className='editable_edit' onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
            <div className='editable_edit_footer'>
                <button type="submit">Add</button>
                <X className="closeIcon" onClick={()=>setIsEditable(false)}/>
            </div>
        </form>
        :
        <p className={`editable_display ${props.displayClass ? props.displayClass : ""}`} onClick={()=>setIsEditable(true)}>
        {props.text}</p>
        }
    </div>
  )
}

export default Editabled