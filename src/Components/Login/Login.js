import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import PageTitle from "../../Hooks/PageTitle";

const Login = () => {
    PageTitle('Login')
    const {login, providerLogin} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user =result?.user;
            const currentUser = {
              email: user?.email,
            };
            toast.success("Login Successful!")
            
            fetch("https://pixel-click-photographer-server.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(currentUser),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("UserToken", data.token);
                form.reset();
                navigate(from, { replace: true });
            });
        })
        .catch(err => console.log(err))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result?.user;
            const currentUser = {
              email: user?.email,
            };
            toast.success('Google Login Successful!');
            fetch("https://pixel-click-photographer-server.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(currentUser),
            })
            .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("UserToken", data.token);
                navigate(from, { replace: true });
            });
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-600 border-0">Login</button>
                </div>
                <div>
                    <p>New Here ? <Link to="/register" className="text-red-600">
                        Create a New Account
                        </Link></p>
                </div>
                <div className="text-center">
                    Sign In With
                    <hr/>
                </div>
                <div className="mx-auto ">
                    <button onClick={handleGoogleSignIn} className="btn btn-circle bg-white border-red-600"> <FaGoogle className="text-blue-600"/></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
