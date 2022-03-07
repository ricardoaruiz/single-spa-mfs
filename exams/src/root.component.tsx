import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Menu from "./components/Menu";
import { LabsPage, PatientsPage } from "./pages";

export default function Root() {
  return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/exams" element={<Navigate to="/exams/labs"/>}></Route>  
          <Route path="/exams/labs" element={<LabsPage />}></Route>  
          <Route path="/exams/patients" element={<PatientsPage />}></Route>  
        </Routes> 
        
      </BrowserRouter>
    );
}
