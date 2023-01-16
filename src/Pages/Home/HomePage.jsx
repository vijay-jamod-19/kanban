import React, { useEffect, useState } from 'react'
import './home.css'
import Board from '../../Components/Board/Board';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../Redux/Action/authAction';
import Editabled from '../../Components/Editabled/Editabled';
import { TitleListAction } from '../../Redux/Action/titleAction';
import { CardListAction, CardUpdateAction } from '../../Redux/Action/cardAction';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const HomePage = () => {
  const [boards, setBoards] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('authData'));
  const {titles} = useSelector(state=>state.TitleList)
  const {TitleAdd,TitleDelete,CardAdd,CardDelete,CardUpdate} = useSelector(state=>state);

  const onDragEnd = (result) => {
    // console.log(result)
    const {destination,draggableId } = result;

    const value = {
      board : destination.droppableId,
      id:draggableId
    }
    dispatch(CardUpdateAction(value));

  }
  const handleLogout = () => {
    dispatch(Logout())
    navigate('/login');
  }
  useEffect(()=>{
    dispatch(TitleListAction());    
    dispatch(CardListAction());
  },[TitleAdd,TitleDelete,CardAdd,CardUpdate,CardDelete])

  useEffect(() => {

    if(user){
        navigate('/')
    }else{
      navigate('/login')
    }
}, [])
  return (
    <div className="app">
      <div className="app_nav">
        <h2>KanBan Board</h2>
        <div className='logout'>
        <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
        <DragDropContext onDragEnd={onDragEnd}>
          {titles && titles.map((item)=>{
             return (
             <Droppable key={item._id} droppableId={item._id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
              <Board key={item._id} board={item}/>
              </div>
              )}
             </Droppable>
             )
          })}
         </DragDropContext>
          {/*  */}
        <Editabled displayClass="board_add-card" 
        text="+ Add Board" 
        placeholder="Enter Board Title" 
        addNew="board"
        />
        </div>
      </div>
    </div>
  )
}

export default HomePage