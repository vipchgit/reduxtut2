import { BsPlus,BsDash } from "react-icons/bs";
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './action/index';
import { BsArrowRight } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const IncDec = () => {
  const counte = useSelector(data=>data.changeTheNumber)
  const dispatch = useDispatch()
  return (<>
    <div className="bg-pink-100 h-12 border-b-2 border-black flex justify-end">
      <Link to='/todoapp' className="flex"><span className="my-auto mr-2">TODO APP</span><BsArrowRight className="my-auto mr-5"/></Link>
    </div>
    <div className="min-h-screen text-center bg-pink-100 flex justify-center items-center">
      <div className='text-center'>
        <h1 className='text-3xl font-extrabold my-4'>Increment/Decrement Counter</h1>
        <p className='font-semibold'>using React and Redux</p>
        <div className='bg-slate-400 mx-36 pb-2 my-2 rounded-md'>
          <button className='pr-3 font-bold text-xl pt-2' onClick={()=>dispatch(decNumber())}><BsDash /></button>
          <span className='bg-white py-1 px-4 text-lg'>{counte}</span>
          <button className='pr-3 font-bold text-xl pt-2' onClick={()=>dispatch(incNumber())}><BsPlus /></button>
        </div>
      </div>
    </div>
    </>
  );
}

export default IncDec;
