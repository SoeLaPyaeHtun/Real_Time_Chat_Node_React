import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';




const Register = () => {
  const navigate = useNavigate();
  const { error , registerInfo, updateRegisterInfo, registerUser } = useContext(AuthContext)

  return (

    <div className='w-full flex flex-col items-center'>
      {/*  */}

      <div className="w-full md:w-1/3 md:h-[calc(100vh-148px)] h-[calc(100vh-178px)] flex flex-col pt-20">

        <div className='p-5 flex flex-row justify-between items-center'>
          <div className='text-2xl'>register</div>
          {
        error !== null &&
        <div className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-[10px] font-bold mr-3">Error</span>
        <span className="font-semibold mr-2 text-left flex-auto text-[10px]">{error}</span>
      </div>
      }
        </div>
        <div className='p-5'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
          <input type="name" name="name" id="name" className= 
          "bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Your Name"
        onChange={(e) => {updateRegisterInfo({...registerInfo, name: e.target.value})}}
        required />
        </div>
        <div className='p-5'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" name="email" id="email" className=
          "bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           placeholder="Your Email" 
        onChange={(e) => {updateRegisterInfo({...registerInfo, email: e.target.value})}}
        required /></div>
        <div className='p-5'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
          <input type="email" name="email" id="email" className=
          "bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Password" 
        onChange={(e) => {updateRegisterInfo({...registerInfo, password: e.target.value})}}
        required /></div>
        <div className='p-5'>
          <button className="w-full
  border border-blue-200
   font-medium rounded-lg text-sm px-5 py-2.5
   text-center hover:bg-blue-400" onClick={() => registerUser()}>Sign up</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-5">
            Do you already register?&nbsp;
            <button className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate('/login')}> Sign in</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register