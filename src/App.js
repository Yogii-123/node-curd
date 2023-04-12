import './App.css';
import TableFile from './Project/TableFile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './Project/FormPage';
import Update from './Project/Update';

function App() {
  return (
    <div>
                <BrowserRouter>
               <Routes>
                 <Route path='/'element={<FormPage/>}></Route>
                 <Route path="TableFile" element={<TableFile/>}></Route>
                 <Route path="Update" element={<Update/>}></Route>
               </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
