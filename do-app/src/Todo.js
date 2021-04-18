import React from 'react';
import './Todo.css';

const Todo = ({form, children}) => {
    return (
        <div className="tddo_wrap">
            <div className="todo_head">날짜 입력</div>
            <div className="todo_body">
                체크리스트 
            </div>
        </div>
    );
  };
  
  export default Todo;