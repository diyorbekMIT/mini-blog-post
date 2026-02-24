import { Navbar, Login, Register, Main } from "./components";
import {Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import authService from "./services/auth";
import { useDispatch } from "react-redux";
import { loginUserSuccess, registerUserSuccess, logOutUser } from "./slice/auth";



const App = () => {

    const dispatch = useDispatch();


    const getUser = async() =>{
        try{
            const response = await authService.getUser();
            dispatch(loginUserSuccess(response.user))
            dispatch(registerUserSuccess(response.user))
            console.log(response.user)
        }catch(err){
            console.log(err)   
        }
    }

    

    useEffect(() => {
       const token = localStorage.getItem("token");
       if(token){
        getUser();
       }
    }, [])

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