export const incNumber = () =>{
  return {
    type:"INCREMENT"
  }
}
export const decNumber = () =>{
  return {
    type:"DECCREMENT"
  }
}

export const addTodo = (data) =>{
  return {
    type:"ADD_TODO",
    payload:{
      id: new Date().getTime().toLocaleString(),
      data
    }
  }
}
export const deleteTodo = (id) =>{
  return {
    type:"DELETE_TODO",
    payload:{ id }
  }
}
export const deleteAllTodo = (id) =>{
  return {
    type:"DELETE_ALL_TODO"
}
}
