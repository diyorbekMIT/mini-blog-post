import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserFailure, loginUserStart, loginUserSuccess } from '../slice/auth'; // Import actions
import authService from '../services/auth';
import Error from './error';
import { useNavigate } from 'react-router';


const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isLoading, loggedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(loginUserStart())
  const user = {
      email: username, 
      password: password, 
  }
  try{
    
     const response = await authService.useLogin(user) 
     dispatch(loginUserSuccess(response.user))
     console.log(response.user)
      navigate("/")
  }catch(err){
     dispatch(loginUserFailure(err.response.data.errors))
  }
};

useEffect(() => {
  if(loggedIn) {
    navigate("/")
  }
}, [])

  return (
    <div className="text-center mt-3 mt-md-5">
      <main className="form-signin mt-5 w-25 m-auto">
        <form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-door-open-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
          </svg>
          <h1 className="h5 mb-3 fw-normal">Please sign in</h1>
          <Error/>
          <div className="form-floating">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              className="form-control"
              id="floatingInput"
              placeholder="Username"
            />
            <label htmlFor="floatingInput">UserName</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="btn btn-primary w-100 mt-3 py-2"
            onClick={handleSubmit}
            type="submit"
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
        </form>
      </main>
    </div> 
  );
};

export default Login;
