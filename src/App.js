import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';
import { listRoutes } from './routes';
function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {listRoutes.map((route,index) => {
              const Page = route.component
              return(
                <Route 
                  key = {index}
                  path = {route.path}
                  element = {<Page />}
                />
              )
            })}
          </Routes>
        </div>
      </BrowserRouter>
      
    </GlobalStyle>
    
  );
}

export default App;
