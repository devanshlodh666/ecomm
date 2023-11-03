"use client"
import { SessionProvider } from 'next-auth/react';
import { createContext,useContext,useState } from 'react';
const Context_data = createContext();
function Wrap({children}){
// header cart
const [cartNumber, setcartNumber] = useState(45);
// user details
const [name, setname] = useState("");
//admin
const [admin, setadmin] = useState()
  return( 
    <>      
        <SessionProvider>
         <Context_data.Provider value={{cartNumber,setcartNumber,name,setname,admin, setadmin}}>
            {children}
         </Context_data.Provider>
        </SessionProvider>
    </>
  )
}

export default Wrap
export const Contex = () => useContext(Context_data);