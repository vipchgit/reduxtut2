const inisialState = [];

const todoReducr = (state=inisialState,action)=>{
  switch(action.type){
    case "ADD_TODO" :{
      return [
        ...state,
       { id:action.payload.id,
         data:action.payload.data}
      ]
    }
    case "DELETE_TODO" :{
      const newList = state.filter((elem)=>elem.id!==action.payload.id)
      return [
        ...newList
      ]
    }
    case "DELETE_ALL_TODO" :{
      return [ ]
    }

    default : return state
  }
}

export default todoReducr;