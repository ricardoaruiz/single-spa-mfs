import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Menu from "./components/Menu";
import { CovidPage, InfluenzaPage } from "./pages";


export default function Root() {
  return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/vaccines" element={<Navigate to="/vaccines/covid"/>}></Route>  
          <Route path="/vaccines/covid" element={<CovidPage />}></Route>  
          <Route path="/vaccines/influenza" element={<InfluenzaPage />}></Route>  
        </Routes> 
        
      </BrowserRouter>
    );
}