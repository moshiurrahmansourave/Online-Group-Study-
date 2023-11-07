import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleSingUp = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        setRegisterError('')
        setSuccess('')
        if (password.length < 6) {
            setRegisterError('password should be 6 carecter or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upuer case caracters.')
            Swal.fire('your password should have at least one upuer case caracters.')
            return;
        }

        createUser (email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
            Swal.fire('Already exists')
        })
    }

    return (

<div>
            <div className="lg:mb-72 mb-5 flex justify-center mt-24 ">
        <div className="card w-96 glass rounded-none ">
            <div className="p-3">
                <div className="flex items-center justify-between">
                <h2 className="card-title">Login form</h2>
                </div>
                
                <form onSubmit={handleSingUp}  className="">
       <div className="form-control">
           <label className="label">
               <span className="label-text">Name</span>
           </label>
           <input name="name" type="Text" placeholder="name" className="input input-bordered" required />
       </div>
       <div className="form-control">
           <label className="label">
               <span className="label-text">Photo Url</span>
           </label>
           <input name="img" type="text" placeholder="photo url" className="input input-bordered"  />
       </div>
       <div className="form-control">
           <label className="label">
               <span className="label-text">Email</span>
           </label>
           <input name="email" type="email" placeholder="email" className="input input-bordered" required />
       </div>
       <div className="form-control">
           <label className="label">
               <span className="label-text">Password</span>
           </label>
           <input name="password" type="password" placeholder="password" className="input input-bordered" required />
           <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>

           {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">
                    {success}
                </p>
            }
         
       </div>
       <div className="form-control mt-6">
           <button className="btn font-medium text-lg hover:bg-green-400 hover:text-white ">Sing Up</button>
       </div>
       <div className="text-center mt-3">
        <p>If you have account </p>
           <p><Link className=" hover:underline hover:text-green-400 font-bold text-xl" to="/login">
           Please login
           </Link>
           </p>
       </div>
  </form>
            </div>
        </div>
        <div >
            <img className='h-full' src="https://i.ibb.co/2gWbmXH/a43637a8f717e4b104676ca7420641db.png" alt="" />
          </div>
          
        </div>
        </div>
    );
};

export default Register;