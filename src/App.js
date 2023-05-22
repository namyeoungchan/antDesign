import { React } from "react";
import { BrowserRouter as Switch , Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from "./components/LoginPage.js";
import MainPage from "./components/MainPage";

export default function App() {

    return (
            <Switch>
              <Routes>
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Main" element={<MainPage />} />
              <Route component={<LoginPage/>}/>
              </Routes>
               </Switch>
    );
}
