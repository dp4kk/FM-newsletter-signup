import React,{useState,useEffect} from 'react'
import mobileImage from '../assets/images/illustration-sign-up-mobile.svg'
import desktopImage from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'
import {useNavigate} from 'react-router-dom'
const Homepage = () => {
  const [email,setEmail] = useState('')
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const navigate = useNavigate()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(()=>{
    if(error){
      const timeout = setTimeout(()=>{
        setError(false)
      },2000)
      return ()=>{
        clearTimeout(timeout)
      }
    }
  },[error,errorMessage])

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    if(email===''){
      setError(true)
      setErrorMessage('Please enter your email')
    }
    else if(!emailRegex.test(email)){
      setError(true)
      setErrorMessage('Invalid email')
    }
    else{
      navigate('/confirm',{state:{email}})
      setEmail('')
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-[750px] border h-screen sm:h-auto border-white sm:rounded-3xl bg-white sm:p-2 flex flex-col sm:flex-row-reverse ">
      <div className='sm:w-[40%] flex'>  
      <img src={mobileImage} alt='mobile image' className='block sm:hidden mx-auto' />
      <img src={desktopImage} alt='desktop image' className='hidden sm:block '/>
      </div>
        <div className="sm:w-[60%] sm:px-16 sm:py-12 px-4 py-2">
          <p className=" text-4xl">Stay updated!</p>
          <p className="my-4 text-sm">
            Join 60,000+ product managers receiving montly updates on:
          </p>
          <div className="mb-6">
            <div className="flex">
              <img src={iconList} />
              <p className="ml-3 text-sm">
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex my-2">
              <img src={iconList} />
              <p className="ml-3 text-sm">Measuring to ensure updates are a success</p>
            </div>
            <div className="flex">
              <img src={iconList} />
              <p className="ml-3 text-sm">And much more!</p>
            </div>
          </div>
          <div className='flex justify-between mb-1'>
          <p className="text-[0.75rem] font-semibold  ">Email address</p>
          {error && <p className='text-[0.75rem] text-red-500 font-semibold'> {errorMessage}</p>}
          </div>
          <form onSubmit={handleFormSubmit}>
          <input className="w-full h-10 border border-gray-300 rounded-md text-sm pl-4" placeholder='email@company.com' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button type='submit' className='text-sm mt-4 bg-black text-white w-full py-2 rounded-md hover:bg-gradient-to-r from-pink-500 to-orange-600 transition-all'> Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage