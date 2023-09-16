import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const { loginUser, updateloginUserInfo, loginUserInfo } = useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col items-center'>
    <div className="w-full md:w-1/3 md:h-[calc(100vh-148px)] h-[calc(100vh-178px)] flex flex-col pt-20">


                <div className='text-2xl p-5'>Login</div>
                <div className='p-5'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg
      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
        dark:placeholder-gray-400 dark:focus:ring-blue-500
        dark:focus:border-blue-500" placeholder="Your Email" 
        onChange={(e) => {updateloginUserInfo({...loginUserInfo, email: e.target.value})}}
        required /></div>
                <div className='p-5'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg
      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
        dark:placeholder-gray-400 dark:focus:ring-blue-500
        dark:focus:border-blue-500" placeholder="Password" 
        onChange={(e) => {updateloginUserInfo({...loginUserInfo, password: e.target.value})}}
        required /></div>
                <div className='p-5'>
                    <button className="w-full
  border border-blue-200
   font-medium rounded-lg text-sm px-5 py-2.5
   text-center hover:bg-blue-400" onClick={() => loginUser()}>Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-5">
                        Don’t have an account yet?&nbsp;
                        <button className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate("/register")}>Sign up</button>
                    </p>
                </div>
        
    </div>
  </div>
  )
}

export default Login