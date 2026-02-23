import { Navbar, Login, Register, Main } from "./components";
import {Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        
            
        </div>
    );
}

export default App;