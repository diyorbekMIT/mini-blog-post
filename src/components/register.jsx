import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    registerUserStart,
    registerUserSuccess,
    registerUserFailure
} from '../slice/auth';
import authService from '../services/auth';
import Error from './error';

const Register = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerUserStart());

        const user = { username, email, password };

        try {
            const response = await authService.useRegister(user); // ✅ await first
            dispatch(registerUserSuccess(response.data));          // ✅ then dispatch with payload
            console.log(response.data);
        } catch (err) {
            const errors = err.response?.data?.errors             // ✅ safe access
                || { message: ["Something went wrong"] };
            dispatch(registerUserFailure(errors));
            console.log(err);
        }
    };

    return (
        <div className='text-center mt-3 mt-md-5'>
            <main className="form-signin mt-5 w-25 m-auto">
                <form>
                    <h1 className="h5 mb-3 fw-normal">Please sign in</h1>
                    <Error />
                    <div className="form-floating">
                        <input type="text" onChange={(e) => setUsername(e.target.value)}
                            value={username} className="form-control"
                            id="floatingUsername" placeholder="Username" />
                        <label htmlFor="floatingUsername">UserName</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control"
                            id="floatingEmail" placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                            id="floatingPassword" placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 mt-3 py-2"
                        type="submit" onClick={handleSubmit}>
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
                </form>
            </main>
        </div>
    );
};

export default Register;
