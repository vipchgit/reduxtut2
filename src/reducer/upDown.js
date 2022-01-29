const inisialState = 0 ;

const changeTheNumber = (state=inisialState,action)=>{
  switch(action.type){
    case "INCREMENT" :
      return state+1;
    // case "DECREMENT" :{
    //   if(state!==0){
    //     return state-1;
    //   }
    // }
    case "DECCREMENT" :{
      if(state!==0){
        return state-1;
      }
        return state;
    }
    default : return state;
  }
}

export default changeTheNumber;