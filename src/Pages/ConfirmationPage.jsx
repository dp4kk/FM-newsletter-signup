import React from 'react'
import successIcon from '../assets/images/icon-success.svg'
import {useLocation ,useNavigate} from 'react-router-dom'
const ConfirmationPage = () => {
    const {state} = useLocation()
    const {email} = state;
    const navigate = useNavigate()
  return (
    <div className="flex min-h-screen  items-center justify-center bg-gray-900">
      <div className="max-w-[400px] flex flex-col justify-between h-screen sm:h-auto border border-white  sm:rounded-xl bg-white px-6 py-4">
      <div className='mt-24 sm:mt-0'>
      <img src={successIcon} className="w-12" />
      <p className="text-5xl my-4 font-semibold">Thanks for subscribing!</p>
      <p className="text-sm">
      A confirmation email has been sent to{" "}
      <span className="font-semibold">{email}</span> Please
      open it and click the button inside to confirm your subscription.
      </p>
      </div>
        <button className="bg-black text-white my-6 w-full py-2 rounded-md hover:bg-gradient-to-r from-pink-500 to-orange-600 transition-all" onClick={()=>navigate('/')}>
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage