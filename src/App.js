import './App.css';
import { BsPlus,BsDash } from "react-icons/bs";
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './action/index';

function App() {
  const counte = useSelector(data=>data.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="min-h-screen text-center bg-pink-100 flex justify-center items-center">
      <div className='text-center'>
        <h1 className='text-3xl font-extrabold my-4'>Increment/Decrement conter</h1>
        <p className='font-semibold'>using React and Redux</p>
        <div className='bg-slate-400 mx-36 pb-2 my-2 rounded-md'>
          <button className='pr-3 font-bold text-xl pt-2' onClick={()=>dispatch(decNumber())}><BsDash /></button>
          <span className='bg-white py-1 px-4 text-lg'>{counte}</span>
          <button className='pr-3 font-bold text-xl pt-2' onClick={()=>dispatch(incNumber())}><BsPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default App;
