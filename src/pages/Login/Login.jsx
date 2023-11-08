import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import app from '../../firebase/firebase.config';


const Login = () => {

    const {singIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSingIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user)
            Swal.fire('Login successfully')
            navigate(location?.state ? location.state :
                '/')
        })
        .catch(error =>{
            console.error(error)
        })
   
    }

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        singIn(email, password)
        .then(result =>{
            console.log(result);

            navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
            console.error(error)
            Swal.fire('email does not match')
        })
    }

    return (
        <div>
            <div className="lg:mb-72 mb-5 flex flex-col lg:flex-row justify-center mt-24 ">
        <div className="card w-96 glass rounded-none ">
            <div className="p-3">
                <div className="flex items-center justify-between">
                <h2 className="card-title">Login form</h2>
                </div>
                
    <form onSubmit={handleLogin}  className="">
        <div className="form-control mb-4">
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
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-outline  hover:text-white ">Login</button>
        </div>

        <div className="flex items-center justify-between mx-4 mt-3">
        <p><Link className="  hover:underline" to="">Forget Password?</Link></p>
            
        <p><Link className=" hover:underline hover:text-green-400 font-bold text-xl" to="/register">Sing Up</Link></p>
        </div>

        <div>
            <h1 className="text-lg underline mb-3 font-semibold text-center mt-2">Login with</h1>
           
           <div className='flex items-center justify-center gap-10'>
           <button onClick={handleGoogleSingIn} className=" border border-black p-3 rounded-full font-medium  mb-2 text-green-500 hover:text-white hover:bg-green-400 ">
                <FaGoogle className='text-4xl '></FaGoogle>
            </button>
            {/* <button  className="border border-black p-3 rounded-full font-medium  mb-2 hover:text-white hover:bg-green-400 text-green-500">
                <FaGithub className='text-4xl'></FaGithub>
            </button> */}
            </div> 
            
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

export default Login;