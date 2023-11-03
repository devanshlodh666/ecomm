"use client"
import '../css/login.css' 
import 'react-toastify/dist/ReactToastify.css';
 import Image from 'next/image';
 import { useState } from 'react';
 import { signIn } from 'next-auth/react';
 import { useRouter } from 'next/navigation';
 import {GoogleLoginButton} from "react-social-login-buttons";
import { useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
 const page = (req) => {
  let path = usePathname();
  console.log(path);
const route = useRouter()
const  {status} = useSession();
const tost = ()=>{
  toast.success('Login successful', {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
const [a, seta] = useState(0)
if (status === 'authenticated' && a === 0) {
  seta(1)
  tost();
  setTimeout(() => {
    route.push('/');
  }, 600);
}

  return ( 
    <>
    <div className="login_main">
      <ToastContainer/>
      <div className="login">
       <div className="left_p">
       <Image
        src="/login.webp"
        width={500}
        height={500}
        priority={true} 
         alt="Picture of the author"
        />
       </div>
       <div className="right_p">
          <h1>Login</h1>
          <p>Get access to your Orders and Details</p>
          <div className="login_button">
            <GoogleLoginButton onClick={()=>signIn('google')}/>
          </div>
          <p className='new_login' onClick={()=>signIn('google')}>New to CompanyName? Create an account</p>
       </div>
      </div>
    </div>
    </>
  ) 
}  
export default page