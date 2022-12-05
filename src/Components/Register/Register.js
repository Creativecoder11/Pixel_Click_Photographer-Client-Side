import { Result } from "postcss";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import PageTitle from "../../Hooks/PageTitle";

const Register = () => {
    PageTitle('Register')
    const {createUser,  updateUserProfile, providerLogin} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
      providerLogin()
        .then(() => {
          toast.success("Google Registration Successful!");
          navigate("/");
        })
        .catch((e) => console.error(e));
    };

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email =form.email.value;
        const password = form.password.value;

        createUser( email, password)
        .then(result => {
            const user =result.user;
            console.log(user);
            toast.success("Registration Successfull!");
            handleUpdateUserProfile(name, photoURL)
            form.reset();
            navigate('/login')
            
        })
        .catch((er) => {
          const errorMessage = er.message;
          toast.error(errorMessage);;
        })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }

      updateUserProfile(profile)
          .then(() => { 
            console.log("Profile updated!") 
          })
          .catch(error => console.error(error));
    }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photoURL"
                    type="text"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
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
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-red-600 border-0">Register</button>
                </div>
                <div>
                  <p className="text-center">
                    Already Sing In?{" "}
                    <Link to="/login" className="text-red-600">
                      Login Now
                    </Link>
                  </p>
                </div>
                <div>
                  <div className="mx-auto ">
                      <button onClick={handleGoogleSignUp} className="btn btn-circle bg-white border-red-600"> <FaGoogle className="text-blue-600"/></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
