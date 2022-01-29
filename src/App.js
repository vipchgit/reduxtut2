import './App.css';
import { useRoutes } from 'react-router-dom';
import IncDec from './IncDec';
import TodoApp from './TodoApp';
const App=()=> {
  let routes = useRoutes([{ path: '/', element: <IncDec /> },
    {path: 'todoapp',element: <TodoApp />,}]);

  return (
    <>
      {routes}
  </>
  );
}

export default App;
