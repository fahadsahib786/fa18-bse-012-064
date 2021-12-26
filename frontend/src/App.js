

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import AppWithRouterAccess from './AppWithRouterAccess ';
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppWithRouterAccess/>
        
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
