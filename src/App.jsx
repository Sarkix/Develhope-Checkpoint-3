import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
