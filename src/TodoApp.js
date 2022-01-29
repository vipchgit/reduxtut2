import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo,deleteAllTodo } from './action/index';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const addTodoFun = (e) => {
    todo && dispatch(addTodo(todo));
    e.preventDefault();
    setTodo("");
  }

  const todoList = todos.map((todo) => {
    return (<div className='flex mt-3' key={todo.id}>
      <li className='w-80 bg-purple-600 py-1 px-3 rounded '>{todo.data}</li>
      <button className='bg-red-500 text-white py-1 px-3 rounded ml-3' onClick={()=>dispatch(deleteTodo(todo.id))}><MdDelete /></button>
    </div>)
  })

  return (<>
    <div className="bg-pink-100 h-12 border-b-2 border-black flex">
      <Link to='/' className="flex"><BsArrowLeft className="my-auto ml-5" /><span className="my-auto ml-2">Increment/Decrement Counter</span></Link>
    </div>
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <h1 className='text-2xl font-bold mb-5 underline'>TODO APP</h1>
      <div>
        <form onSubmit={addTodoFun}>
          <input type='text' value={todo} placeholder='Add New Todo' className='w-80 border-b-2 border-black outline-none' onChange={(e) => setTodo(e.target.value)} />
          <button className='bg-green-600 ml-4 px-3 py-1 text-white rounded '>Add</button>
        </form>
      </div>
      <div className='mt-5'>
        <ul>

          {(todos.length !== 0) ? todoList :
            <div className='flex mt-3'>
              <h1>Add Your Todos</h1>
            </div>}
        </ul>
      </div>
      {(todos.length < 2 ) ?null : <button className='bg-red-500 mt-5 text-white py-1 px-3 rounded ml-3' onClick={()=>dispatch(deleteAllTodo())}>Delete All Todos</button>}
    </div>
  </>);
};

export default TodoApp;
